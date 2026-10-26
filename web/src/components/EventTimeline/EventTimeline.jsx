import styles from './EventTimeline.module.css';

// The first (soonest) event gets a saffron dot, the rest cyan.
export default function EventTimeline({ events }) {
  return (
    <ol className={styles.timeline}>
      {events.map((event, i) => (
        <li key={event.id} className={styles.item}>
          <span aria-hidden="true" className={`${styles.dot} ${i === 0 ? styles.next : ''}`} />
          <div className={styles.date}>{event.date}</div>
          <div className={styles.title}>{event.title}</div>
          <div className={styles.place}>{event.place}</div>
        </li>
      ))}
    </ol>
  );
}
