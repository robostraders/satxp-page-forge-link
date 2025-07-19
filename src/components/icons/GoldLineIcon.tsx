
import React from 'react';

interface GoldLineIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const GoldLineIcon: React.FC<GoldLineIconProps> = ({ 
  className = "", 
  width = 200, 
  height = 8 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--gold-primary))" stopOpacity="0" />
          <stop offset="20%" stopColor="hsl(var(--gold-primary))" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(var(--gold-secondary))" stopOpacity="1" />
          <stop offset="80%" stopColor="hsl(var(--gold-primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--gold-primary))" stopOpacity="0" />
        </linearGradient>
        <filter id="lineBlur" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect
        x="0"
        y={height / 2 - 1}
        width={width}
        height="2"
        fill="url(#lineGradient)"
        filter="url(#lineBlur)"
        rx="1"
      />
    </svg>
  );
};
