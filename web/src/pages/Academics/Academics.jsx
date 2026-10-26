import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

const INTRO =
  'Four stages, each building on the last, from play-based foundations to board exams and career guidance.';

// Stub: stages and facilities are added in step 5.
export default function Academics() {
  useDocumentTitle('Academics', INTRO);

  return <PageHeader title="The learning journey" intro={INTRO} />;
}
