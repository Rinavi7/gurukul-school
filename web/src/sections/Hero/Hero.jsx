import Button from '../../components/Button/Button.jsx';
import OrbitGraphic from '../../components/OrbitGraphic/OrbitGraphic.jsx';
import FactsStrip from '../FactsStrip/FactsStrip.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.row}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>A school where every child finds their orbit</p>
          <h1 className={styles.title}>Rooted in wisdom. Built for tomorrow.</h1>
          <p className={styles.lead}>
            Gurukul School blends the values of traditional learning with labs, coding and hands-on
            projects, so students grow curious, kind and ready for the world they will build.
          </p>
          <div className={styles.ctas}>
            <Button to="/admissions">Book a campus visit</Button>
            <Button to="/academics" variant="secondary">
              Explore academics
            </Button>
          </div>
        </div>
        <div className={styles.graphic}>
          <OrbitGraphic />
        </div>
      </div>

      <FactsStrip />
    </section>
  );
}
