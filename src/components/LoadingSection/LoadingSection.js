import styles from './LoadingSection.module.scss';

export default function LoadingSection({ message = 'Carregando...' }) {
  return (
    <div className={styles.wrapper}>
      {message}
    </div>
  );
}
