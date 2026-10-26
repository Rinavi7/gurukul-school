import GalleryGrid from '../../components/GalleryGrid/GalleryGrid.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { gallery } from '../../data/gallery.js';
import styles from './GalleryPreview.module.css';

export default function GalleryPreview() {
  return (
    <section id="gallery" className={`container ${styles.section}`}>
      <SectionHeading
        title="Life at Gurukul"
        size="md"
        link={{ to: '/gallery', label: 'Open the gallery' }}
      />
      <GalleryGrid items={gallery} />
    </section>
  );
}
