// src/components/LogoMark.jsx
// Reusable hex-shield logo mark used in Navbar and Footer.

export default function LogoMark({ size = 36 }) {
  const id = `grad-logo-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SecureDala logo mark"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="var(--cyber-blue)"  />
          <stop offset="100%" stopColor="var(--cyber-green)" />
        </linearGradient>
      </defs>

      {/* Outer hex */}
      <polygon
        points="36,4 68,20 68,52 36,68 4,52 4,20"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="1.5"
      />
      {/* Middle hex */}
      <polygon
        points="36,14 58,25 58,47 36,58 14,47 14,25"
        fill="rgba(0,200,255,0.05)"
        stroke="rgba(0,200,255,0.3)"
        strokeWidth="1"
      />
      {/* Inner hex */}
      <polygon
        points="36,24 48,30 48,42 36,48 24,42 24,30"
        fill="rgba(0,255,136,0.05)"
        stroke="rgba(0,255,136,0.4)"
        strokeWidth="1"
      />
      {/* Up chevron */}
      <path
        d="M30 36 L36 31 L42 36"
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Down chevron */}
      <path
        d="M30 41 L36 36 L42 41"
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Centre dot */}
      <circle cx="36" cy="36" r="3" fill={`url(#${id})`} />
    </svg>
  )
}
