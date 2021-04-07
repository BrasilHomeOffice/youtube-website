import Head from 'next/head'
import PageCommon from '../../components/PageCommon/PageCommon';
import CareerCards from '../../components/CareerCards/CareerCards';

export default function Home() {
  return (
    <PageCommon
      vtitle="Brasil Home Office - Quem somos"
      vdescription="@TODO ~ escrever description para este primeiro vídeo. OBS: Considerar uso de md"
    >
      <CareerCards full />
    </PageCommon>
  )
}
