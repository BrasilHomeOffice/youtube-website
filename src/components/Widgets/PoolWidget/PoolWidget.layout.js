import LoadingSection from '../../LoadingSection/LoadingSection';
import styles from './PoolWidget.module.scss'

/**
 * @TODO ~ Add propTypes
 */
export default function PoolWidgetLayout({
  loading,
  error,
  pool,
}) {

  let content = false;

  if (loading) {
    content = (
      <LoadingSection />
    );
  } else if (error) {
    content = <div>{String(error)}</div>;
  } else if (!pool) {
    content = <div>...</div>;
  } else {
    // const {
    //   description,
    //   options = [],
    // } = pool;
    const description = pool.description;
    const options = pool.options || [];

    content = (
      <div>
        {!!description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
        <div className={styles.optionsWrapper}>
          {options.map((option, index) => {
            return (
              <div key={index}></div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {!!pool && !!pool.title && <h3>{pool.title}</h3>}
      {content}
    </div>
  )
}
