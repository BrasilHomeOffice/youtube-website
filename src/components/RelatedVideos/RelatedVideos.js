import Head from 'next/head'
import styles from './RelatedVideos.module.scss'
import VideoThumbnailLink from '../VideoThumbnailLink/VideoThumbnailLink'

export default function RelatedVideos({ videos = [] }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vídeos Relacionados</h3>
      <div className={styles.grid}>
        {videos.map(({ title, description, image }, index) => (
          <div key={index} className={styles.thumbWrapper}>
            <VideoThumbnailLink
              title={title}
              description={description}
              image={image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
