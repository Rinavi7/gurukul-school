import useDocumentTitle from '../../hooks/useDocumentTitle.js';
import About from '../../sections/About/About.jsx';
import Academics from '../../sections/Academics/Academics.jsx';
import AdmissionsPreview from '../../sections/AdmissionsPreview/AdmissionsPreview.jsx';
import Contact from '../../sections/Contact/Contact.jsx';
import EventsPreview from '../../sections/EventsPreview/EventsPreview.jsx';
import GalleryPreview from '../../sections/GalleryPreview/GalleryPreview.jsx';
import Hero from '../../sections/Hero/Hero.jsx';
import NoticesPreview from '../../sections/NoticesPreview/NoticesPreview.jsx';
import styles from './Home.module.css';

export default function Home() {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <About />
      <Academics />
      <section className={`container ${styles.updates}`}>
        <div className={styles.updatesRow}>
          <NoticesPreview />
          <EventsPreview />
        </div>
      </section>
      <GalleryPreview />
      <AdmissionsPreview />
      <Contact />
    </>
  );
}
