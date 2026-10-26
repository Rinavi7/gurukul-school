import EnquiryForm from '../../components/EnquiryForm/EnquiryForm.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { admissionSteps } from '../../data/admissionSteps.js';
import styles from './AdmissionsPreview.module.css';

export default function AdmissionsPreview() {
  return (
    <section id="admissions" className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionHeading title="Admissions open for 2027–28" />
          <p className={styles.intro}>
            Send an enquiry and our admissions team will call you within two working days.
          </p>
          <ol className={styles.steps}>
            {admissionSteps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number}>{i + 1}</span>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepText}>{step.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
