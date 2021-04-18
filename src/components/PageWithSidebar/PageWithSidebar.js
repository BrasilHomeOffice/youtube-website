import PageBase from '../PageBase/PageBase'
import styles from './PageWithSidebar.module.scss'

export default function PageWithSidebar({ banner, sidebar, children }) {
  return (
    <PageBase banner={banner}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {sidebar}
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </PageBase>
  )
}
