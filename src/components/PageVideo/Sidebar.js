import SocialLoginWidget from '../Widgets/SocialLoginWidget/SocialLoginWidget'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SocialLoginWidget />
    </div>
  )
}
