import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';

export default function Login() {
  useDocumentTitle('Login');

  return <PageHeader title="Parent and staff login coming soon" />;
}
