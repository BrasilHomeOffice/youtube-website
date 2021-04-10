import Head from 'next/head'
import PageBase from '../components/PageBase/PageBase'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <PageBase>
      <div className={styles.container}>
        <Head>
          <title>Brasil Home Office - Youtube</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Brasil Home Office
          </h1>

          <p className={styles.description}>
            Lista de vídeos
          </p>

          <ul className={styles.listOfVideos}>
            <li>
              <a href="/videos/apresentacao-brasil-home-office">O que é Brasil Home Office</a>
            </li>
            <li>
              <a href="#">Que profissões Home Office existem?!</a>
            </li>
            <li>
              <a href="#">Profissões Home Office sem computador</a>
            </li>
            <li>
              <a href="#">Como criar uma empresa home office</a>
            </li>
            <li>
              <a href="#">Pilares Fundamentais: E-commerce (Lojas Virtuais)</a>
            </li>
            <li>
              <a href="#">Pilares Fundamentais: Programadores</a>
            </li>
            <li>
              <a href="#">Pilares Fundamentais: Editores de Vídeos</a>
            </li>
          </ul>
        </main>

        <footer className={styles.footer}>
          Site para o canal do youtube <a href="#">Brasil Home Office</a>
        </footer>
      </div>
    </PageBase>
  )
}
