
import React from 'react';

interface LaptopIconProps {
  className?: string;
  size?: number;
}

export const LaptopIcon: React.FC<LaptopIconProps> = ({ className = "", size = 64 }) => {
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
        <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--gold-primary))" />
          <stop offset="100%" stopColor="hsl(var(--gold-secondary))" />
        </linearGradient>
        <filter id="laptopGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Screen */}
      <rect
        x="12"
        y="12"
        width="40"
        height="28"
        rx="2"
        fill="url(#laptopGradient)"
        opacity="0.2"
        filter="url(#laptopGlow)"
      />
      
      <rect
        x="14"
        y="14"
        width="36"
        height="24"
        rx="1"
        fill="url(#laptopGradient)"
        opacity="0.8"
      />
      
      {/* Screen content lines */}
      <rect x="18" y="20" width="28" height="2" fill="white" opacity="0.6" rx="1" />
      <rect x="18" y="26" width="20" height="2" fill="white" opacity="0.4" rx="1" />
      <rect x="18" y="32" width="24" height="2" fill="white" opacity="0.4" rx="1" />
      
      {/* Base/Keyboard */}
      <rect
        x="8"
        y="40"
        width="48"
        height="8"
        rx="2"
        fill="url(#laptopGradient)"
        opacity="0.6"
      />
      
      {/* Keyboard keys (simplified) */}
      <rect x="12" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="16" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="20" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="24" y="43" width="8" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="34" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="38" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="42" y="43" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="46" y="43" width="6" height="2" fill="white" opacity="0.3" rx="0.5" />
    </svg>
  );
};
