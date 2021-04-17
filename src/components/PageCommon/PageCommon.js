import PageBase from '../PageBase/PageBase'
import styles from './PageCommon.module.scss'

/**
 * @DEPRECATED ~ Use PageBase
 */

export default function PageCommon({ banner, children }) {
  return (
    <PageBase>
      {!!banner && banner}
      
      <div className={styles.container}>
        { children }
      </div>
    </PageBase>
  )
}
