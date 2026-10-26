import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

// Stub: the notice list from the API is added in step 9.
export default function Notices() {
  useDocumentTitle('Notices');

  return <PageHeader title="Notice board" />;
}
