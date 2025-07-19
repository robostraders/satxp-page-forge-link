
import React from 'react';

interface ArrowDownIconProps {
  className?: string;
  size?: number;
}

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className = "", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--gold-primary))" />
          <stop offset="100%" stopColor="hsl(var(--gold-secondary))" />
        </linearGradient>
      </defs>
      
      {/* Arrow shaft */}
      <rect
        x="14"
        y="8"
        width="4"
        height="12"
        fill="url(#arrowGradient)"
        rx="2"
      />
      
      {/* Arrow head */}
      <path
        d="M16 24 L8 16 L12 16 L16 20 L20 16 L24 16 Z"
        fill="url(#arrowGradient)"
      />
    </svg>
  );
};
