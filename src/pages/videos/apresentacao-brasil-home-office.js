import Head from 'next/head'
import PageVideo from '../../components/PageVideo/PageVideo'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import styles from '../../styles/videos/apresentacao-brasil-home-office.module.scss'
import CareerCards from '../../components/CareerCards/CareerCards';

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
      <PageVideo
        vtitle="Brasil Home Office"
        vdescription=""
        uri="/videos/apresentacao-brasil-home-office"
      >
        <div className={styles.videoContent}>
          <p>
            A todos que gostariam de trabalhar em casa... Queremos te mostrar
            o caminho para conseguir alcançar este objetivo.
          </p>

          <p>
            Existem muitas profissões que possibilitam o trabalho home office...
            Você precisa escolher as áreas que mais te agradam, e - talvez -
            até misturar algumas delas para obter sucesso na sua carreira.
          </p>

          <p>
            Confira abaixo algumas profissões que podem te dar
            a oportunidade de trabalhar em casa.
          </p>
        </div>

        <CareerCards />
        
        {/* <RelatedVideos
          videos={relatedVideos}
        />

        <br/>

        <h2>Sobre o Criador do Brasil Home Office</h2>

        <p>
          Eu me chamo Giovanne, sou um desenvolvedor de 
          aplicativos e sistemas empresariais, já prestei
          serviço para empresas prestigiadas como Petrobras,
          Crefisa, Pestana Leilões, dentre outros... Atualmente faço parte
          de uma consultoria internacional de TI, trabalhando em uma
          plataforma para ensino a distância,
          a <a href="" target="_blank" rel="noindex nofollow">Nearpod</a>.
        </p>

        <p>
          O Brasil Home Office é um projeto pessoal meu,
          com o objetivo de ajudar pessoas que querem
          encontrar uma forma de trabalhar em casa.
        </p> */}
      </PageVideo>
    </div>
  )
}
