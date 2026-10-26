import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`container ${styles.section}`}>
      <div className={styles.layout}>
        <div className={styles.details}>
          <SectionHeading title="Visit us" size="md" />
          <address className={styles.address}>
            <div>[School address, City, PIN]</div>
            <div>
              <a href="tel:+910000000000">[+91 phone number]</a>
            </div>
            <div>
              <a href="mailto:info@example.com">[info@school-domain]</a>
            </div>
            <div>School office: Mon to Sat, 8 am to 3 pm</div>
          </address>
        </div>
        <div className={styles.map}>[Map embed]</div>
      </div>
    </section>
  );
}
