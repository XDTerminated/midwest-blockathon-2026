// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title LuminaEscrow
/// @notice Staking & escrow for case uploads with trust-based release
contract LuminaEscrow {
    IERC20 public immutable usdc;
    address public immutable treasury;

    uint256 public constant STAKE_AMOUNT = 100000; // $0.10 USDC (6 decimals)
    uint256 public constant AUTO_RELEASE_DURATION = 120; // 2 minutes
    uint256 public constant REQUIRED_APPROVALS = 2;
    uint256 public constant REQUIRED_FLAGS = 2;

    enum EscrowStatus { PENDING, RELEASED, SLASHED }

    struct Escrow {
        address contributor;
        uint256 stakeAmount;
        uint256 stakedAt;
        EscrowStatus status;
        uint256 approvalCount;
        uint256 flagCount;
    }

    // cidHash => Escrow
    mapping(bytes32 => Escrow) public escrows;

    // cidHash => voter => bool (prevent double-voting)
    mapping(bytes32 => mapping(address => bool)) public hasVoted;

    // contributor => list of cidHashes
    mapping(address => bytes32[]) public contributorEscrows;

    event StakeDeposited(bytes32 indexed cidHash, address indexed contributor, uint256 amount);
    event TrustVote(bytes32 indexed cidHash, address indexed voter, bool approve);
    event EscrowReleased(bytes32 indexed cidHash, address indexed contributor, uint256 amount);
    event EscrowSlashed(bytes32 indexed cidHash, address indexed contributor, uint256 amount);

    constructor(address _usdc, address _treasury) {
        usdc = IERC20(_usdc);
        treasury = _treasury;
    }

    /// @notice Stake USDC and register a case CID for escrow
    function stakeAndRegister(bytes32 cidHash) external {
        require(escrows[cidHash].contributor == address(0), "Case already registered");
        require(usdc.transferFrom(msg.sender, address(this), STAKE_AMOUNT), "USDC transfer failed");

        escrows[cidHash] = Escrow({
            contributor: msg.sender,
            stakeAmount: STAKE_AMOUNT,
            stakedAt: block.timestamp,
            status: EscrowStatus.PENDING,
            approvalCount: 0,
            flagCount: 0
        });

        contributorEscrows[msg.sender].push(cidHash);

        emit StakeDeposited(cidHash, msg.sender, STAKE_AMOUNT);
    }

    /// @notice Vote to approve or flag a case
    function vote(bytes32 cidHash, bool approve) external {
        Escrow storage e = escrows[cidHash];
        require(e.contributor != address(0), "Case not found");
        require(e.status == EscrowStatus.PENDING, "Escrow not pending");
        require(msg.sender != e.contributor, "Contributor cannot vote on own case");
        require(!hasVoted[cidHash][msg.sender], "Already voted");

        hasVoted[cidHash][msg.sender] = true;

        if (approve) {
            e.approvalCount += 1;
            if (e.approvalCount >= REQUIRED_APPROVALS) {
                _release(cidHash);
            }
        } else {
            e.flagCount += 1;
            if (e.flagCount >= REQUIRED_FLAGS) {
                _slash(cidHash);
            }
        }

        emit TrustVote(cidHash, msg.sender, approve);
    }

    /// @notice Release escrow after auto-release duration has passed
    function claimAutoRelease(bytes32 cidHash) external {
        Escrow storage e = escrows[cidHash];
        require(e.contributor != address(0), "Case not found");
        require(e.status == EscrowStatus.PENDING, "Escrow not pending");
        require(block.timestamp >= e.stakedAt + AUTO_RELEASE_DURATION, "Too early");

        _release(cidHash);
    }

    /// @notice Get escrow info for a case
    function getEscrow(bytes32 cidHash) external view returns (
        address contributor,
        uint256 stakeAmount,
        uint256 stakedAt,
        EscrowStatus status,
        uint256 approvalCount,
        uint256 flagCount
    ) {
        Escrow storage e = escrows[cidHash];
        return (e.contributor, e.stakeAmount, e.stakedAt, e.status, e.approvalCount, e.flagCount);
    }

    /// @notice Get all escrow cidHashes for a contributor
    function getContributorEscrows(address contributor) external view returns (bytes32[] memory) {
        return contributorEscrows[contributor];
    }

    function _release(bytes32 cidHash) internal {
        Escrow storage e = escrows[cidHash];
        e.status = EscrowStatus.RELEASED;
        require(usdc.transfer(e.contributor, e.stakeAmount), "Release transfer failed");
        emit EscrowReleased(cidHash, e.contributor, e.stakeAmount);
    }

    function _slash(bytes32 cidHash) internal {
        Escrow storage e = escrows[cidHash];
        e.status = EscrowStatus.SLASHED;
        require(usdc.transfer(treasury, e.stakeAmount), "Slash transfer failed");
        emit EscrowSlashed(cidHash, e.contributor, e.stakeAmount);
    }
}
