// Importing the image (instead of linking /images/...) lets Vite fingerprint the file name,
// so browsers fetch the new version whenever the image is replaced.
import gurukulIllustration from '../../assets/images/gurukul-illustration.jpg';
import styles from './CampusBanner.module.css';

// Temporary illustration until a real photo of the campus is available.
export default function CampusBanner() {
  return (
    <section className={`container ${styles.section}`}>
      <figure className={styles.figure}>
        <img
          src={gurukulIllustration}
          alt="Illustration of a traditional gurukul: a teacher and students sitting in the shade of a large banyan tree beside a small temple"
          width="645"
          height="360"
          className={styles.image}
        />
      </figure>
    </section>
  );
}
