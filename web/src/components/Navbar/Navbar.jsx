import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import styles from './Navbar.module.css';

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/notices', label: 'Notices' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes (React's "adjust state during render" pattern)
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header id="top" className={styles.header}>
      <nav aria-label="Main" className={`container ${styles.nav} ${open ? styles.open : ''}`}>
        <Link to="/" className={styles.brand}>
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#7FE3F0"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            <path d="M12 24 Q20 30 28 24 Z" fill="#FFB03A" />
            <path d="M20 10 C24 15 23 20 20 22 C17 20 16 15 20 10 Z" fill="#FFB03A" />
          </svg>
          <span className={styles.brandName}>Gurukul School</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Menu
        </button>

        <div id="main-menu" className={styles.links}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
          <Button to="/login" variant="pillOutline">
            Parent login
          </Button>
          <Button to="/admissions" variant="pill">
            Apply for 2027–28
          </Button>
        </div>
      </nav>
    </header>
  );
}
