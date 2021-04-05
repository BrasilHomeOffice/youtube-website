import Head from 'next/head'
import styles from './RelatedVideos.module.scss'

export default function RelatedVideos({ vtitle, vdescription, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.videoPlayer}>
          <VideoPlayer
            title={vtitle}
            description={vdescription}
          />
        </div>
        <div className={styles.sidebar}>
          sidebar
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
