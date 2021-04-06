import Head from 'next/head'
import styles from './VideoThumbnailLink.module.scss'

export default function VideoThumbnailLink({ title, description, image }) {
  return (
    <a
      href="#"
      className={styles.container}
      title={description}
    >
      <span
        className={styles.thumbnail}
        style={{
          backgroundImage: `url('${image}')`
        }}
      ></span>
      <h4 className={styles.title}>
        {title}
      </h4>
    </a>
  )
}
