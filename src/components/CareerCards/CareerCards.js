import Head from 'next/head'
import styles from './CareerCards.module.scss'
import SingleCareerCard from './SingleCareerCard'
import listOfCareers from './listOfCareers'

export default function CareerCards({ full, length = 3 }) {
  const _list = full ? listOfCareers : listOfCareers.slice(0, length);

  return (
    <div className={styles.container}>

      {!full && (<a
        href="#"
        className={styles.moreLink}
      >
        ver todas as profissões &raquo;
      </a>)}

      <h3 className={styles.title}>Profissões Home Office</h3>
      
      <div className={styles.grid}>
        {_list.map(({ title, description, image }) => (
          <div className={styles.thumbWrapper}>
            <SingleCareerCard
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
