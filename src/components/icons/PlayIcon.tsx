
import React from 'react';

interface PlayIconProps {
  className?: string;
  size?: number;
}

export const PlayIcon: React.FC<PlayIconProps> = ({ className = "", size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--gold-primary))" />
          <stop offset="100%" stopColor="hsl(var(--gold-secondary))" />
        </linearGradient>
        <filter id="playGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="hsl(var(--gold-secondary))" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Outer circle with gradient */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="url(#playGradient)"
        filter="url(#playGlow)"
      />
      
      {/* Inner circle for depth */}
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="rgba(255, 255, 255, 0.1)"
      />
      
      {/* Play triangle */}
      <path
        d="M28 22 L28 42 L44 32 Z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
};
