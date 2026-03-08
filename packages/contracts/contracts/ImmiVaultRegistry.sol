// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title LuminaRegistry
/// @notice On-chain registry for immigration case CIDs with micropayment tracking
contract LuminaRegistry is Ownable {
    IERC20 public immutable usdc;
    uint256 public accessPrice; // in USDC smallest unit (6 decimals)

    struct CaseInfo {
        address contributor;
        uint256 accessCount;
        uint256 totalEarned;
        uint256 registeredAt;
    }

    // cidHash (keccak256 of CID string) => CaseInfo
    mapping(bytes32 => CaseInfo) public cases;

    // contributor => list of cidHashes they registered
    mapping(address => bytes32[]) public contributorCases;

    // cidHash => payer => bool (track who already paid)
    mapping(bytes32 => mapping(address => bool)) public hasPaid;

    event CaseRegistered(bytes32 indexed cidHash, address indexed contributor, uint256 timestamp);
    event CaseAccessed(bytes32 indexed cidHash, address indexed payer, address indexed contributor, uint256 amount);
    event AccessPriceUpdated(uint256 oldPrice, uint256 newPrice);

    constructor(address _usdc, uint256 _accessPrice) Ownable(msg.sender) {
        usdc = IERC20(_usdc);
        accessPrice = _accessPrice;
    }

    /// @notice Register a new case CID on-chain
    /// @param cidHash keccak256 hash of the IPFS CID string
    /// @param contributor wallet address of the case contributor
    function registerCase(bytes32 cidHash, address contributor) external onlyOwner {
        require(cases[cidHash].contributor == address(0), "Case already registered");
        require(contributor != address(0), "Invalid contributor");

        cases[cidHash] = CaseInfo({
            contributor: contributor,
            accessCount: 0,
            totalEarned: 0,
            registeredAt: block.timestamp
        });

        contributorCases[contributor].push(cidHash);

        emit CaseRegistered(cidHash, contributor, block.timestamp);
    }

    /// @notice Pay to access a case — USDC transferred directly to contributor
    /// @param cidHash keccak256 hash of the IPFS CID string
    function payForAccess(bytes32 cidHash) external {
        CaseInfo storage info = cases[cidHash];
        require(info.contributor != address(0), "Case not found");
        require(!hasPaid[cidHash][msg.sender], "Already paid for this case");
        require(msg.sender != info.contributor, "Contributors access own cases free");

        // Transfer USDC from payer to contributor
        require(usdc.transferFrom(msg.sender, info.contributor, accessPrice), "USDC transfer failed");

        hasPaid[cidHash][msg.sender] = true;
        info.accessCount += 1;
        info.totalEarned += accessPrice;

        emit CaseAccessed(cidHash, msg.sender, info.contributor, accessPrice);
    }

    /// @notice Check if an address has paid for a case (or is the contributor)
    /// @param cidHash keccak256 hash of the IPFS CID string
    /// @param user address to check
    function hasAccess(bytes32 cidHash, address user) external view returns (bool) {
        CaseInfo storage info = cases[cidHash];
        if (info.contributor == address(0)) return false;
        if (info.contributor == user) return true;
        return hasPaid[cidHash][user];
    }

    /// @notice Get case info
    function getCase(bytes32 cidHash) external view returns (
        address contributor,
        uint256 accessCount,
        uint256 totalEarned,
        uint256 registeredAt
    ) {
        CaseInfo storage info = cases[cidHash];
        return (info.contributor, info.accessCount, info.totalEarned, info.registeredAt);
    }

    /// @notice Get contributor stats
    function getContributorStats(address contributor) external view returns (
        uint256 casesUploaded,
        uint256 totalEarned,
        uint256 totalAccesses
    ) {
        bytes32[] storage cids = contributorCases[contributor];
        casesUploaded = cids.length;
        for (uint256 i = 0; i < cids.length; i++) {
            CaseInfo storage info = cases[cids[i]];
            totalEarned += info.totalEarned;
            totalAccesses += info.accessCount;
        }
    }

    /// @notice Get all CID hashes for a contributor
    function getContributorCases(address contributor) external view returns (bytes32[] memory) {
        return contributorCases[contributor];
    }

    /// @notice Update access price (owner only)
    function setAccessPrice(uint256 _newPrice) external onlyOwner {
        uint256 oldPrice = accessPrice;
        accessPrice = _newPrice;
        emit AccessPriceUpdated(oldPrice, _newPrice);
    }
}
