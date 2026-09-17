export default function Flag({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 100 70" className={className}>
      <defs>
        <linearGradient id="flagBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1452" />
          <stop offset="100%" stopColor="#152bc5" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100" height="70" fill="url(#flagBg)" rx="3" />
      <rect x="0" y="8" width="100" height="2.5" fill="#01fff6" opacity="0.9" filter="url(#glow)" />
      <rect x="0" y="59.5" width="100" height="2.5" fill="#01fff6" opacity="0.9" filter="url(#glow)" />
      <rect x="8" y="0" width="2.5" height="70" fill="#01fff6" opacity="0.9" filter="url(#glow)" />
      <rect x="89.5" y="0" width="2.5" height="70" fill="#01fff6" opacity="0.9" filter="url(#glow)" />
      <rect x="38" y="12" width="24" height="46" fill="#5c01ff" rx="2" />
      <rect x="38" y="12" width="24" height="46" fill="none" stroke="#01fff6" strokeWidth="0.5" rx="2" opacity="0.4" />
      <g transform="translate(50, 35)" filter="url(#glow)">
        <polygon points="0,-11 2.8,-3.7 11,-3.7 4.6,1.8 6.5,9.2 0,5.5 -6.5,9.2 -4.6,1.8 -11,-3.7 -2.8,-3.7" fill="#ffd801" />
        <polygon points="0,-11 2.8,-3.7 11,-3.7 4.6,1.8 6.5,9.2 0,5.5 -6.5,9.2 -4.6,1.8 -11,-3.7 -2.8,-3.7" fill="#ffd801" transform="rotate(45)" />
        <circle cx="0" cy="0" r="2" fill="#ffd801" opacity="0.6" />
      </g>
    </svg>
  );
}
