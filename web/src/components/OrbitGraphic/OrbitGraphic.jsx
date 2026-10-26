import styles from './OrbitGraphic.module.css';

// Geometry and class names copied from design/gurukul-home.html. The gk-* classes
// live in styles/animations.css: each ring spins, and each badge counter-spins to stay upright.
const LABEL = {
  textAnchor: 'middle',
  fill: '#C9CDEB',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '15',
};

export default function OrbitGraphic() {
  return (
    <svg
      viewBox="-40 -40 600 600"
      className={styles.svg}
      role="img"
      aria-label="Learning orbit: values at the centre, with science, coding, languages, arts, sports and music around it"
    >
      <circle
        cx="260"
        cy="260"
        r="240"
        fill="none"
        stroke="rgba(127,227,240,0.12)"
        strokeWidth="1"
      />
      <circle
        cx="260"
        cy="260"
        r="110"
        fill="none"
        stroke="rgba(127,227,240,0.4)"
        strokeWidth="1"
      />
      <defs>
        <radialGradient id="gk-glow-grad">
          <stop offset="0" stopColor="#FFB03A" stopOpacity="0.6" />
          <stop offset="0.55" stopColor="#FFB03A" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFB03A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Centre diya */}
      <circle cx="260" cy="260" r="58" fill="#151842" stroke="#FFB03A" strokeWidth="2" />
      <circle className="gk-glow" cx="260" cy="244" r="52" fill="url(#gk-glow-grad)" />
      <g className="gk-flame">
        <path d="M260 208 C272 226 276 246 260 266 C244 246 248 226 260 208 Z" fill="#FFB03A" />
        <path
          className="gk-flame-in"
          d="M260 230 C266 240 267 252 260 263 C253 252 254 240 260 230 Z"
          fill="#FFF1C9"
        />
      </g>
      <path d="M260 266 L260 272" stroke="#3A2A12" strokeWidth="2" strokeLinecap="round" />
      <path d="M226 270 Q260 306 294 270 Q277 278 260 278 Q243 278 226 270 Z" fill="#FFB03A" />
      <ellipse cx="260" cy="271" rx="34" ry="5" fill="#FFD27A" />
      <text {...LABEL} x="260" y="340" fill="#EEF0FF" fontWeight="700">
        Values
      </text>

      {/* Inner ring: clockwise 22s */}
      <g className="gk-orbit">
        <g className="gk-upright">
          <rect x="310" y="212" width="120" height="96" fill="transparent" />
          <circle cx="370" cy="260" r="22" fill="#151842" stroke="#7FE3F0" strokeWidth="1.5" />
          <g
            transform="translate(359 249) scale(0.92)"
            fill="none"
            stroke="#7FE3F0"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="#7FE3F0" stroke="none" />
          </g>
          <text {...LABEL} x="370" y="302">
            Science
          </text>
        </g>
        <g className="gk-upright">
          <rect x="90" y="212" width="120" height="96" fill="transparent" />
          <circle cx="150" cy="260" r="22" fill="#151842" stroke="#7FE3F0" strokeWidth="1.5" />
          <text x="150" y="267" textAnchor="middle" fill="#7FE3F0">
            <tspan fontFamily="Tiro Devanagari Hindi, serif" fontSize="20">
              अ
            </tspan>
            <tspan fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" dx="1">
              A
            </tspan>
          </text>
          <text {...LABEL} x="150" y="302">
            Languages
          </text>
        </g>
        <circle cx="260" cy="150" r="4" fill="#FFB03A" />
        <circle cx="260" cy="370" r="4" fill="#FFB03A" />
      </g>

      {/* Middle dashed ring: anticlockwise 34s */}
      <g className="gk-orbit2">
        <circle
          cx="260"
          cy="260"
          r="180"
          fill="none"
          stroke="rgba(127,227,240,0.28)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <g className="gk-upright2">
          <rect x="327" y="85" width="120" height="96" fill="transparent" />
          <circle cx="387" cy="133" r="22" fill="#151842" stroke="#FFB03A" strokeWidth="1.5" />
          <g
            transform="translate(376 122) scale(0.92)"
            fill="none"
            stroke="#FFB03A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
          </g>
          <text {...LABEL} x="387" y="175">
            Coding
          </text>
        </g>
        <g className="gk-upright2">
          <rect x="73" y="339" width="120" height="96" fill="transparent" />
          <circle cx="133" cy="387" r="22" fill="#151842" stroke="#FFB03A" strokeWidth="1.5" />
          <g
            transform="translate(122 376) scale(0.92)"
            fill="none"
            stroke="#FFB03A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-0.9 2-1.9 0-1.1-1-1.6-1-2.6 0-1 0.9-1.5 2-1.5h2.2A3.8 3.8 0 0 0 21 11.2C21 6.6 17 3 12 3z" />
            <circle cx="7.5" cy="11" r="1.2" fill="#FFB03A" />
            <circle cx="11" cy="7" r="1.2" fill="#FFB03A" />
            <circle cx="16" cy="8.5" r="1.2" fill="#FFB03A" />
          </g>
          <text {...LABEL} x="133" y="429">
            Arts
          </text>
        </g>
      </g>

      {/* Outer ring: clockwise 50s */}
      <g className="gk-orbit3">
        <g className="gk-upright3">
          <rect x="30" y="42" width="120" height="96" fill="transparent" />
          <circle cx="90" cy="90" r="22" fill="#151842" stroke="#EEF0FF" strokeWidth="1.5" />
          <g
            transform="translate(79 79) scale(0.92)"
            fill="none"
            stroke="#EEF0FF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l11-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="17" cy="16" r="3" />
          </g>
          <text {...LABEL} x="90" y="132">
            Music
          </text>
        </g>
        <g className="gk-upright3">
          <rect x="370" y="382" width="120" height="96" fill="transparent" />
          <circle cx="430" cy="430" r="22" fill="#151842" stroke="#EEF0FF" strokeWidth="1.5" />
          <g
            transform="translate(419 419) scale(0.92)"
            fill="none"
            stroke="#EEF0FF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
          </g>
          <text {...LABEL} x="430" y="472">
            Sports
          </text>
        </g>
        <circle cx="260" cy="20" r="4" fill="#7FE3F0" />
        <circle cx="500" cy="260" r="3" fill="#7FE3F0" />
        <circle cx="20" cy="260" r="3" fill="#7FE3F0" />
      </g>
    </svg>
  );
}
