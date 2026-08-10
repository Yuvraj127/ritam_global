import React from "react";

export default function FloatingMotif() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      width: '100vw',
      height: '100vw',
      maxWidth: '1200px',
      maxHeight: '1200px',
      pointerEvents: 'none',
      zIndex: -1, // Behind everything
      opacity: 0.03, // Very subtle watermark effect
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'slowRotate 120s linear infinite',
      transformOrigin: 'top left', // Correct anchor for translate(-50%, -50%)
    }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        <g stroke="var(--color-gold-dark)" strokeWidth="0.2" fill="none">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="44" />
          {Array.from({ length: 24 }).map((_, i) => (
            <ellipse key={i} cx="50" cy="50" rx="45" ry="5" transform={`rotate(${i * 15} 50 50)`} />
          ))}
        </g>
      </svg>
    </div>
  );
}
