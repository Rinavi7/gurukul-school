import { Link } from 'react-router-dom';
import styles from './Button.module.css';

// Link styled as a button. Variants: primary, secondary (hero), pill, pillOutline (navbar).
export default function Button({ to, variant = 'primary', className = '', children, ...rest }) {
  return (
    <Link to={to} className={`${styles.button} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
