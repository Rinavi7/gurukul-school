import styles from './MottoBand.module.css';

const MOTTOS = [
  { hi: 'शिक्षा', en: 'Education' },
  { hi: 'अनुशासन', en: 'Discipline' },
  { hi: 'संस्कार', en: 'Values' },
];

export default function MottoBand() {
  return (
    <div className={styles.band}>
      <div className={styles.row}>
        <span aria-hidden="true" className={styles.line} />
        <span aria-hidden="true" className={styles.diamond} />
        <p lang="hi" className={styles.word}>
          गुरुकुल
        </p>
        <span aria-hidden="true" className={styles.diamond} />
        <span aria-hidden="true" className={styles.line} />
      </div>
      <ul lang="hi" className={styles.pills}>
        {MOTTOS.map((m) => (
          <li key={m.en} className={styles.pill}>
            <span className={styles.hi}>{m.hi}</span>
            <span lang="en" className={styles.en}>
              {m.en}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
