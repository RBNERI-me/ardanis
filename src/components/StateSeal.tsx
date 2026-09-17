export default function StateSeal({ size = 60, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd801" />
          <stop offset="50%" stopColor="#ffb300" />
          <stop offset="100%" stopColor="#ffd801" />
        </linearGradient>
        <filter id="sealGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#sealGold)" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="url(#sealGold)" strokeWidth="0.5" opacity="0.6" />
      <circle cx="50" cy="50" r="38" fill="rgba(5, 8, 20, 0.8)" stroke="url(#sealGold)" strokeWidth="1" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x = 50 + 46 * Math.cos(angle);
        const y = 50 + 46 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="0.8" fill="#ffd801" opacity="0.7" />;
      })}
      <g transform="translate(50, 50)" filter="url(#sealGlow)">
        <polygon points="0,-18 4.2,-5.5 16.5,-5.5 6.9,2.7 9.7,13.8 0,8.2 -9.7,13.8 -6.9,2.7 -16.5,-5.5 -4.2,-5.5" fill="#ffd801" />
        <polygon points="0,-18 4.2,-5.5 16.5,-5.5 6.9,2.7 9.7,13.8 0,8.2 -9.7,13.8 -6.9,2.7 -16.5,-5.5 -4.2,-5.5" fill="#ffd801" transform="rotate(45)" />
      </g>
      <path id="sealTextPath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
      <text fill="#ffd801" fontSize="5.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="2">
        <textPath href="#sealTextPath" startOffset="5%">SOVEREIGN•REPUBLIC•OF•ARDANIS</textPath>
      </text>
    </svg>
  );
}
