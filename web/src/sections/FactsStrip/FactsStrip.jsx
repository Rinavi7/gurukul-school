import { facts } from '../../data/facts.js';
import styles from './FactsStrip.module.css';

export default function FactsStrip() {
  return (
    <div className={styles.strip}>
      {facts.map((fact) => (
        <div key={fact.label} className={styles.fact}>
          <div className={styles.label}>{fact.label}</div>
          <div className={styles.value}>{fact.value}</div>
        </div>
      ))}
    </div>
  );
}
