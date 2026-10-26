import { Link } from 'react-router-dom';
import styles from './NoticeCard.module.css';

// `highlight` gives the date box a saffron border (the design uses it for the newest notice).
export default function NoticeCard({ to, day, month, title, meta, highlight = false }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={`${styles.date} ${highlight ? styles.highlight : ''}`}>
        <div className={styles.day}>{day}</div>
        <div className={styles.month}>{month}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>{meta}</div>
      </div>
    </Link>
  );
}
