import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { facilities } from '../../data/facilities.js';
import { stages } from '../../data/stages.js';
import styles from './Academics.module.css';

const ICONS = {
  robot: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L5 19a1 1 0 0 0 1 1.5h12A1 1 0 0 0 19 19l-5-10V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  book: <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM4 17a2 2 0 0 1 2-2h12" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

export default function Academics() {
  return (
    <section id="academics" className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <SectionHeading title="The learning journey" />
        <p className={styles.intro}>
          Four stages, each building on the last, from play-based foundations to board exams and
          career guidance.
        </p>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <li key={stage.name} className={styles.stage}>
              <div className={styles.marker}>
                <span className={styles.number}>{i + 1}</span>
                <span className={styles.connector} />
              </div>
              <h3 className={styles.stageName}>{stage.name}</h3>
              <p className={styles.stageClasses}>{stage.classes}</p>
              <p className={styles.stageText}>{stage.text}</p>
            </li>
          ))}
        </ol>

        <h3 className={styles.spacesTitle}>Spaces to build and explore</h3>
        <div className={styles.facilities}>
          {facilities.map((f) => (
            <div key={f.title} className={styles.facility}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7FE3F0"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {ICONS[f.icon]}
              </svg>
              <h4 className={styles.facilityTitle}>{f.title}</h4>
              <p className={styles.facilityText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
