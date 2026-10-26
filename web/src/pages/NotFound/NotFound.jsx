import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';
import styles from './NotFound.module.css';

// Styled 404 page in the same look is finished in step 5.
export default function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <>
      <PageHeader title="Page not found" />
      <p className={styles.back}>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
}
