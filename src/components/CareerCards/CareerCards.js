import Head from 'next/head'
import styles from './CareerCards.module.scss'
import SingleCareerCard from './SingleCareerCard'
import listOfCareers from './listOfCareers'

export default function CareerCards({ full, length = 3 }) {
  const _list = full ? listOfCareers : listOfCareers.slice(0, length);

  return (
    <div className={styles.container}>

      {!!full && (<a
        href="/"
        className={styles.moreLink}
      >
        Sair
      </a>)}

      {!full && (<a
        href="/carreiras-home-office"
        className={styles.moreLink}
      >
        ver todas as profissões &raquo;
      </a>)}

      <h3 className={styles.title}>Profissões Home Office</h3>
      
      <div className={styles.grid}>
        {_list.map(({ slug, title, description, image, linkTo }) => (
          <div key={slug} className={styles.thumbWrapper}>
            <SingleCareerCard
              title={title}
              description={description}
              image={image}
              // link={`/carreiras-home-office/${slug}`}
              link={linkTo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
