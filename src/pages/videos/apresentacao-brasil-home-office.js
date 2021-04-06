import Head from 'next/head'
import VideoPage from '../../components/VideoPage/VideoPage'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import styles from '../../styles/videos/apresentacao-brasil-home-office.module.scss'

// @WIP
function ytUrl(id) {
  return `https://img.youtube.com/vi/${id}/1.jpg`;
}

const relatedVideos = [
  {
    title: "First youtube video here",
    description: "",
    image: ytUrl('67XTa8QeZ7o'),
  },
  {
    title: "First youtube video here youtube video here",
    description: "",
    image: ytUrl('67XTa8QeZ7o'),
  },
  {
    title: "First youtube video here",
    description: "",
    image: ytUrl('67XTa8QeZ7o'),
  },
  {
    title: "First youtube video here",
    description: "",
    image: ytUrl('67XTa8QeZ7o'),
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <VideoPage
        vtitle="Brasil Home Office - Quem somos"
        vdescription="@TODO ~ escrever description para este primeiro vídeo. OBS: Considerar uso de md"
      >
        <RelatedVideos
          videos={relatedVideos}
        />
      </VideoPage>
    </div>
  )
}
