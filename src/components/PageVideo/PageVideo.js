import Head from 'next/head'
import styles from './PageVideo.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import PageBase from '../PageBase/PageBase'
import Sidebar from './Sidebar';
import FacebookComments from '../Social/FacebookComments';

export default function PageVideo({
  vtitle,
  vdescription,
  children,
  uri,
}) {
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
          <Sidebar />
          <div className={styles.content}>
            {children}

            {!!uri && <FacebookComments uri={uri} />}
          </div>
        </div>
      </div>
    </PageBase>
  )
}
