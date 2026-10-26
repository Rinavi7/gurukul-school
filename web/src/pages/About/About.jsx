import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

const INTRO =
  'In a gurukul, students learned by living close to their teachers, asking questions and working with their hands. We keep that closeness: small classes, mentors who know every child, and a timetable that leaves room to build, perform and play.';

// Stub: vision, mission and the principal's message are added in step 5.
export default function About() {
  useDocumentTitle('About', INTRO);

  return <PageHeader title="An old idea of learning, renewed" intro={INTRO} />;
}
