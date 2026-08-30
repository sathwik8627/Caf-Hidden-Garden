import React from 'react';

interface CafeLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  variant?: 'full' | 'compact' | 'badge' | 'monochrome' | 'dark';
  showTagline?: boolean;
  withBackground?: boolean;
}

export const CafeLogo: React.FC<CafeLogoProps> = ({
  size = 'md',
  className = '',
  variant = 'full',
  showTagline = true,
  withBackground = false,
}) => {
  // Dimension mapping
  const sizeConfig = {
    xs: { width: 36, height: 36, scale: 0.28 },
    sm: { width: 48, height: 48, scale: 0.38 },
    md: { width: 72, height: 72, scale: 0.58 },
    lg: { width: 108, height: 108, scale: 0.85 },
    xl: { width: 160, height: 160, scale: 1.25 },
    hero: { width: 220, height: 220, scale: 1.7 },
  };

  const { width, height } = sizeConfig[size] || sizeConfig.md;

  const darkTheme = variant === 'dark';
  const greenColor = darkTheme ? '#D4E2D7' : '#1C3122';
  const darkGreenAccent = darkTheme ? '#8EA895' : '#15251A';
  const goldColor = '#C8A951';
  const leafColor = darkTheme ? '#A2BCAB' : '#2A4532';
  const leafHighlight = darkTheme ? '#C7D9CD' : '#3D5E46';
  const bgFill = withBackground ? (darkTheme ? '#152219' : '#EDE6DA') : 'none';

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
      style={{ width: `${width}px` }}
    >
      <svg
        viewBox="0 0 260 260"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xs overflow-visible"
        aria-label="Café Hidden Garden Logo"
      >
        <defs>
          {/* Subtle drop shadow filters */}
          <filter id="logoShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18" />
          </filter>
          <filter id="textGlow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.22" />
          </filter>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFC372" />
            <stop offset="50%" stopColor="#C8A951" />
            <stop offset="100%" stopColor="#9C7F33" />
          </linearGradient>
          <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#253E2B" />
            <stop offset="100%" stopColor="#142318" />
          </linearGradient>
        </defs>

        {/* Optional background disc */}
        {withBackground && (
          <circle cx="130" cy="130" r="126" fill={bgFill} stroke={greenColor} strokeWidth="1.5" />
        )}

        {/* Main Circular Frame Arc (Left & Top portion) */}
        <path
          d="M 130 20 A 98 98 0 1 0 102 214"
          fill="none"
          stroke={greenColor}
          strokeWidth="4.5"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />

        {/* Right Botanical Branch wrapping up */}
        <path
          d="M 102 214 Q 165 208 200 162 Q 230 115 204 60 Q 185 30 148 20"
          fill="none"
          stroke={leafColor}
          strokeWidth="3.8"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />

        {/* Detailed Vine Leaves */}
        {/* Leaf 1 - Bottom Right */}
        <g filter="url(#logoShadow)">
          <path
            d="M 158 202 Q 182 208 196 194 Q 178 184 158 202 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 158 202 Q 178 198 196 194" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 2 - Mid Lower Right */}
        <g filter="url(#logoShadow)">
          <path
            d="M 188 178 Q 218 178 226 156 Q 200 152 188 178 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 188 178 Q 208 168 226 156" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 3 - Mid Right Outside */}
        <g filter="url(#logoShadow)">
          <path
            d="M 206 142 Q 236 132 238 106 Q 212 112 206 142 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 206 142 Q 224 124 238 106" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 4 - Mid Right Inside */}
        <g filter="url(#logoShadow)">
          <path
            d="M 194 130 Q 176 102 184 84 Q 202 104 194 130 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 194 130 Q 188 106 184 84" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 5 - Upper Right */}
        <g filter="url(#logoShadow)">
          <path
            d="M 192 82 Q 216 62 210 38 Q 186 52 192 82 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 192 82 Q 202 58 210 38" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 6 - Top Right Canopy */}
        <g filter="url(#logoShadow)">
          <path
            d="M 166 48 Q 180 22 168 4 Q 152 26 166 48 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
          <path d="M 166 48 Q 172 24 168 4" stroke={leafHighlight} strokeWidth="1" />
        </g>

        {/* Leaf 7 - Top Branch Inward */}
        <g filter="url(#logoShadow)">
          <path
            d="M 148 20 Q 130 6 122 18 Q 136 28 148 20 Z"
            fill={leafColor}
            stroke={darkGreenAccent}
            strokeWidth="0.8"
          />
        </g>

        {/* '— CAFÉ —' Heading */}
        <g filter="url(#textGlow)">
          <text
            x="126"
            y="76"
            textAnchor="middle"
            fill={greenColor}
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="18"
            fontWeight="600"
            letterSpacing="5"
          >
            — CAFÉ —
          </text>
        </g>

        {/* Cursive Calligraphy 'Hidden Garden' */}
        <g filter="url(#textGlow)">
          {/* 'Hidden' */}
          <text
            x="126"
            y="120"
            textAnchor="middle"
            fill={greenColor}
            fontFamily="'Brush Script MT', 'Great Vibes', 'Playfair Display', cursive, serif"
            fontSize="46"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="0.5"
          >
            Hidden
          </text>
          {/* 'Garden' */}
          <text
            x="126"
            y="162"
            textAnchor="middle"
            fill={greenColor}
            fontFamily="'Brush Script MT', 'Great Vibes', 'Playfair Display', cursive, serif"
            fontSize="48"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="0.5"
          >
            Garden
          </text>
        </g>

        {/* Bottom Steaming Cup & Saucer Motif */}
        <g transform="translate(126, 206)" filter="url(#logoShadow)">
          {/* Steam wisps */}
          <path
            d="M -4 -16 Q -8 -24 -3 -30 Q 2 -36 -2 -42"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 3 -16 Q 7 -24 3 -30 Q -1 -36 4 -41"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Saucer */}
          <ellipse cx="0" cy="5" rx="27" ry="4.5" fill="#121F16" stroke="url(#goldGradient)" strokeWidth="1.5" />

          {/* Cup Body */}
          <path
            d="M -20 -13 Q -20 1 0 3 Q 20 1 20 -13 Z"
            fill="url(#cupGradient)"
            stroke="url(#goldGradient)"
            strokeWidth="1.6"
          />

          {/* Cup Handle */}
          <path
            d="M 18 -10 C 27 -10 27 -1 18 1"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Golden 3-Leaf emblem on cup */}
          {/* Center Leaf */}
          <path
            d="M 0 -10 Q 3 -5 0 0 Q -3 -5 0 -10 Z"
            fill="url(#goldGradient)"
          />
          {/* Left Leaf */}
          <path
            d="M 0 -2 Q -5 -8 -7 -4 Q -4 -1 0 0 Z"
            fill="url(#goldGradient)"
          />
          {/* Right Leaf */}
          <path
            d="M 0 -2 Q 5 -8 7 -4 Q 4 -1 0 0 Z"
            fill="url(#goldGradient)"
          />
        </g>

        {/* Bottom Tagline */}
        {showTagline && (
          <g>
            <text
              x="130"
              y="238"
              textAnchor="middle"
              fill={greenColor}
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="2.8"
            >
              • HIDE AWAY AND FIND NATURE •
            </text>
            {/* Small accent bar under tagline */}
            <line
              x1="110"
              y1="248"
              x2="150"
              y2="248"
              stroke={greenColor}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
