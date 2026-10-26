import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { principal } from '../../data/principal.js';
import styles from './PrincipalMessage.module.css';

export default function PrincipalMessage() {
  return (
    <section id="principal" className={`container ${styles.section}`}>
      <article className={styles.card}>
        <SectionHeading title="Message from the principal" size="md" />
        <div className={styles.person}>
          <PlaceholderImage label="Photo" variant="avatar" />
          <div>
            <div className={styles.name}>{principal.name}</div>
            <div className={styles.role}>{principal.role}</div>
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.greeting}>{principal.greeting}</p>
          {principal.message.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <footer className={styles.signature}>
          <div>{principal.signOff}</div>
          <div className={styles.name}>{principal.name}</div>
          <div className={styles.role}>{principal.role}, Gurukul School</div>
        </footer>
      </article>
    </section>
  );
}
