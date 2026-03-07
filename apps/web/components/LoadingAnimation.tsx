export const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24">
      {/* Animated bars — blockchain-inspired chain links */}
      <div className="flex items-end gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-[#D4AD5A]"
            style={{
              animation: `barPulse 1.2s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes barPulse {
          0%, 100% { height: 8px; opacity: 0.3; }
          50% { height: 28px; opacity: 1; }
        }
      `}</style>
    </div>
  );
};
