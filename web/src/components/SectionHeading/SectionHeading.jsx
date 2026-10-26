import { Link } from 'react-router-dom';
import styles from './SectionHeading.module.css';

// size "lg" for the big section titles, "md" for the notice/events/gallery/contact ones.
// Pass `link` ({ to, label }) to show a "See all"-style link on the right.
// `as` changes the tag (e.g. "h1" when the section is the main heading of a page).
export default function SectionHeading({ title, size = 'lg', link, as: Tag = 'h2' }) {
  const heading = <Tag className={`${styles.heading} ${styles[size]}`}>{title}</Tag>;

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
