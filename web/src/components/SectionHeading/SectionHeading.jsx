import { Link } from 'react-router-dom';
import styles from './SectionHeading.module.css';

// size "lg" for the big section titles, "md" for the notice/events/gallery/contact ones.
// Pass `link` ({ to, label }) to show a "See all"-style link on the right.
export default function SectionHeading({ title, size = 'lg', link }) {
  const heading = <h2 className={`${styles.heading} ${styles[size]}`}>{title}</h2>;

  if (!link) return heading;

  return (
    <div className={styles.row}>
      {heading}
      <Link to={link.to} className={styles.link}>
        {link.label}
      </Link>
    </div>
  );
}
