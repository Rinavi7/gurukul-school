import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

// Stub: Upcoming/Past tabs from the API are added in step 9.
export default function Events() {
  useDocumentTitle('Events');

  return <PageHeader title="Coming up" />;
}
