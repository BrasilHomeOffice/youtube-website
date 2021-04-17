import Head from 'next/head'
import PageCareer from '../../components/PageCareer/PageCareer';
import CareerCards from '../../components/CareerCards/CareerCards';

export default function Home() {
  return (
    <PageCareer
      title="Programador"
      isHighlight={true}
      bgImageUrl="/images/bg-apps-1.jpg"
      commentsUri={'/profissao/programador'}
      profession={{
        stats: [
          {
            label: 'Mercado de Trabalho',
            value: 'Falta profissionais qualificados e há muitas vagas de trabalho sobrando',
          },
          {
            label: 'Ramificações',
            value: 'Um programador pode atuar em diversas áreas, fazendo aplicativos, sistemas empresariais, sites, marketing',
          },
          {
            label: 'Pode Empreender',
            value: 'Sim',
          },
          {
            label: 'Categoria',
            value: 'Desenvolvimento de Sistemas',
          },
          {
            label: 'Tempo de Investimento',
            value: 'Entre 8 meses e 1 ano é o suficiente para conseguir o primeiro emprego',
          },
          {
            label: 'Salário em São Paulo (R$)',
            value: 'Junior(3500~6000) - Pleno(6000~9000) - Senior(10000~16000) - Especialista(15000+)',
          },
        ]
      }}
    >
    </PageCareer>
  )
}
