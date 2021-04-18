import styles from './PostRow.module.scss'

export default function PostRow({ title, date, excerpt }) {
  return (
    <a href="#" className={styles.aContainer}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{String(date)}</span>
      <span className={styles.excerpt}>{excerpt}</span>
    </a>
  )
}
