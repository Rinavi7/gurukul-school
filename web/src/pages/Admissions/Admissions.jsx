import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

const INTRO = 'Send an enquiry and our admissions team will call you within two working days.';

// Stub: steps and the enquiry form are added in step 5.
export default function Admissions() {
  useDocumentTitle('Admissions', INTRO);

  return <PageHeader title="Admissions open for 2027–28" intro={INTRO} />;
}
