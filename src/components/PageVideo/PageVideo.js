import Head from 'next/head'
import styles from './PageVideo.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import PageBase from '../PageBase/PageBase'

export default function PageVideo({ vtitle, vdescription, children }) {
  return (
    <PageBase>
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
    </PageBase>
  )
}
