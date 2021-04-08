import Head from 'next/head'
import styles from './SingleCareerCard.module.scss'

export default function SingleCareerCard({ title, description, image, link }) {
  return (
    <a
      href={link}
      className={styles.container}
      title={description}
    >
      <span
        className={styles.thumbnail}
        style={{
          backgroundImage: `url('${image}')`
        }}
      ></span>
      <span className={styles.contentWrapper}>
        <h4 className={styles.title}>
          {title}
        </h4>
      </span>
    </a>
  )
}
