import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.bar}>
        <div>© 2026 Gurukul School</div>
        <div className={styles.links}>
          <Link to="/login">Staff login</Link>
          <a href="#privacy">Privacy</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
