import styles from './VideoRow.module.scss'

export default function VideoRow({ thumbnail, title, date, excerpt, linkTo }) {
  return (
    <a href={linkTo} className={styles.aContainer}>
      <span className={styles.layout}>
        <span
          className={styles.thumbnail}
          style={{backgroundImage: `url('${thumbnail}')`}}
        ></span>
        <span className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{String(date)}</span>
          <span className={styles.excerpt}>{excerpt}</span>
        </span>
      </span>
    </a>
  )
}
