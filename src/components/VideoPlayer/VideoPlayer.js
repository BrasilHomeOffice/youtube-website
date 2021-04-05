import Head from 'next/head'
import styles from './VideoPlayer.module.scss'

export default function VideoPlayer({ title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.iframeWrapper}>
        <iframe
          // width="560"
          // height="315"
          className={styles.iframe}
          src="https://www.youtube.com/embed/PGbQWou26w4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.videoInfo}>
        <h1 className={styles.videoTitle}>{title}</h1>
        <p className={styles.videoDescription}>{description}</p>
      </div>
    </div>
  )
}
