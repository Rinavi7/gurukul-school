import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

// Stub: address, phone, email and the map placeholder are added in step 5.
export default function Contact() {
  useDocumentTitle('Contact');

  return <PageHeader title="Visit us" />;
}
