import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import MottoBand from '../../components/MottoBand/MottoBand.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import styles from './PublicLayout.module.css';

export default function PublicLayout() {
  return (
    <div className={styles.shell}>
      <Navbar />
      <div className={`container ${styles.motto}`}>
        <MottoBand />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
