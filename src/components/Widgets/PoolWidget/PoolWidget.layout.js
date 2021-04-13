import { useEffect, useState } from 'react';
import LoadingSection from '../../LoadingSection/LoadingSection';
import styles from './PoolWidget.module.scss'

/**
 * @TODO ~ Add propTypes
 */
export default function PoolWidgetLayout({
  loading,
  error,
  pool,
  answerId,
  onAnswerOption,
}) {

  const [copyAnswerId, setCopyAnswerId] = useState(null);

  useEffect(() => {
    setCopyAnswerId(answerId);
  }, [answerId]);

  const onClickOption = (option) => {
    setCopyAnswerId(option.id);
  };

  const onClickVote = () => {
    onAnswerOption(pool.options.find(op => op.id === copyAnswerId));
  };

  let content = false;

  if (error) {
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
          {options.map((option) => {
            const className = [];
            className.push(styles.optionButton);
            if (option.image) className.push(styles.optionButtonWithImage);
            if (copyAnswerId === option.id) className.push(styles.currentOptionButton);

            return (
              <button
                key={option.id}
                className={className.join(' ')}
                onClick={() => onClickOption(option)}
              >
                {!!option.image && (
                  <span
                    className={styles.optionImage}
                    style={{
                      backgroundImage: `url('${option.image}')`,
                    }}
                  />
                )}
                {option.label}
              </button>
            );
          })}
        </div>
        {!!loading && (
          <LoadingSection />
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {!!pool && !!pool.title && <h3 class={styles.widgetTitle}>{pool.title}</h3>}
      {content}
      {!loading && (
        <div className={styles.widgetFooter}>
          <button
            disabled={!copyAnswerId}
            onClick={onClickVote}
          >
            Votar
          </button>
        </div>
      )}
    </div>
  )
}
