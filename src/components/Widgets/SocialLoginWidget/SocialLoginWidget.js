import { fbLogin } from '../../PageBase/facebook'
import styles from './SocialLoginWidget.module.scss'

export default function SocialLoginWidget() {
  const loginWithFacebook = () => {
    alert('poar');
    fbLogin();
  }

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Minha Conta</h3>

      <div
        className="fb-login-button"
        data-width="250"
        data-size="large"
        data-button-type="login_with"
        data-layout="rounded"
        data-auto-logout-link="false"
        data-use-continue-as="true"
        onClick={loginWithFacebook}
      ></div>
    </section>
  )
}
