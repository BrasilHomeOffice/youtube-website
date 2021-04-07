import styles from './PageCommon.module.scss'

export default function PageCommon({ children }) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}
