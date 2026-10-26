import { Link } from 'react-router-dom';
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { principal } from '../../data/principal.js';
import styles from './About.module.css';

// headingAs="h1" when this section is the top of the About page rather than part of Home.
export default function About({ headingAs = 'h2' }) {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <SectionHeading title="An old idea of learning, renewed" as={headingAs} />
          <p className={styles.intro}>
            In a gurukul, students learned by living close to their teachers, asking questions and
            working with their hands. We keep that closeness: small classes, mentors who know every
            child, and a timetable that leaves room to build, perform and play.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} ${styles.vision}`}>Our vision</h3>
              <p className={styles.cardText}>
                [Write the school&apos;s vision in one or two sentences.]
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} ${styles.mission}`}>Our mission</h3>
              <p className={styles.cardText}>
                [Write the school&apos;s mission in one or two sentences.]
              </p>
            </div>
          </div>
        </div>

        <figure className={styles.principal}>
          <div className={styles.person}>
            <PlaceholderImage label="Photo" variant="avatar" />
            <div>
              <div className={styles.name}>{principal.name}</div>
              <div className={styles.role}>{principal.role}</div>
            </div>
          </div>
          <blockquote className={styles.quote}>“{principal.quote}”</blockquote>
          <Link to="/about#principal" className={styles.more}>
            Read the full message
          </Link>
        </figure>
      </div>
    </section>
  );
}
