import styles from './PlaceholderImage.module.css';

// Striped stand-in until real photos arrive. Variants: "tile" (gallery) or "avatar" (principal).
export default function PlaceholderImage({ label, variant = 'tile', className = '' }) {
  return <div className={`${styles[variant]} ${className}`}>{label}</div>;
}
