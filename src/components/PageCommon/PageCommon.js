import PageBase from '../PageBase/PageBase'
import styles from './PageCommon.module.scss'

/**
 * @DEPRECATED ~ Use PageBase
 */

export default function PageCommon({ children }) {
  return (
    <PageBase>
      <div className={styles.container}>
        { children }
      </div>
    </PageBase>
  )
}
