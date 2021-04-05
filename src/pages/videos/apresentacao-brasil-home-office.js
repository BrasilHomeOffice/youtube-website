import Head from 'next/head'
import VideoPage from '../../components/VideoPage/VideoPage'
import styles from '../../styles/videos/apresentacao-brasil-home-office.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <VideoPage
        vtitle="Brasil Home Office - Quem somos"
        vdescription="@TODO ~ escrever description para este primeiro vídeo. OBS: Considerar uso de md"
      >
        conteúdoxx
      </VideoPage>
    </div>
  )
}
