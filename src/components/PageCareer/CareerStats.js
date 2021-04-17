import PageCommon from '../PageCommon/PageCommon'
import styles from './CareerStats.module.scss'

export default function CareerStats({
  stats,
}) {
  return (
    <div className={styles.container}>
      {stats.map(({ label, value }) => {
        return (
          <div key={label} className={styles.statsItem}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{value}</div>
          </div>
        );
      })}
    </div>
  );
}
