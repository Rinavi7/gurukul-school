import EventTimeline from '../../components/EventTimeline/EventTimeline.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { sampleEvents } from '../../data/sampleEvents.js';
import styles from './EventsPreview.module.css';

export default function EventsPreview() {
  return (
    <div id="events" className={styles.column}>
      <SectionHeading title="Coming up" size="md" />
      <EventTimeline events={sampleEvents} />
    </div>
  );
}
