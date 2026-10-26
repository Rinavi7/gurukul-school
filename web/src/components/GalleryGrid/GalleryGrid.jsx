import PlaceholderImage from '../PlaceholderImage/PlaceholderImage.jsx';
import styles from './GalleryGrid.module.css';

export default function GalleryGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <PlaceholderImage
          key={item.label}
          label={item.label}
          className={item.tall ? styles.tall : ''}
        />
      ))}
    </div>
  );
}
