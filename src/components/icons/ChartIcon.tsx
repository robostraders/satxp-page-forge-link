
import React from 'react';

interface ChartIconProps {
  className?: string;
  size?: number;
}

export const ChartIcon: React.FC<ChartIconProps> = ({ className = "", size = 64 }) => {
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
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--gold-primary))" />
          <stop offset="100%" stopColor="hsl(var(--gold-secondary))" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="url(#chartGradient)"
        opacity="0.1"
        filter="url(#glow)"
      />
      
      {/* Chart bars */}
      <rect x="20" y="40" width="4" height="16" fill="url(#chartGradient)" rx="2" />
      <rect x="28" y="32" width="4" height="24" fill="url(#chartGradient)" rx="2" />
      <rect x="36" y="24" width="4" height="32" fill="url(#chartGradient)" rx="2" />
      <rect x="44" y="36" width="4" height="20" fill="url(#chartGradient)" rx="2" />
      
      {/* Trend line */}
      <path
        d="M18 42 L30 34 L38 26 L46 38"
        stroke="url(#chartGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      
      {/* Data points */}
      <circle cx="18" cy="42" r="2" fill="url(#chartGradient)" />
      <circle cx="30" cy="34" r="2" fill="url(#chartGradient)" />
      <circle cx="38" cy="26" r="2" fill="url(#chartGradient)" />
      <circle cx="46" cy="38" r="2" fill="url(#chartGradient)" />
    </svg>
  );
};
