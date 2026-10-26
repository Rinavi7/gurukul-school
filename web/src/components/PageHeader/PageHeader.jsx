import styles from './PageHeader.module.css';

export default function PageHeader({ title, intro }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
