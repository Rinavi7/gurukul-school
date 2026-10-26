import NoticeCard from '../../components/NoticeCard/NoticeCard.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { sampleNotices } from '../../data/sampleNotices.js';
import styles from './NoticesPreview.module.css';

export default function NoticesPreview() {
  return (
    <div id="notices" className={styles.column}>
      <SectionHeading
        title="Notice board"
        size="md"
        link={{ to: '/notices', label: 'See all notices' }}
      />
      <ul className={styles.list}>
        {sampleNotices.map((notice, i) => (
          <li key={notice.id}>
            <NoticeCard
              to="/notices"
              day={notice.day}
              month={notice.month}
              title={notice.title}
              meta={notice.meta}
              highlight={i === 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
