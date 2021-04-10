import { useAuth } from '../../../lib/auth/auth';
import { fbLogin } from '../../PageBase/facebook'
import styles from './SocialLoginWidget.module.scss'

export default function SocialLoginWidget() {
  const {
    loading,
    error,
    accessToken,
    user,
  } = useAuth();

  const loginWithFacebook = () => {
    alert('poar');
    fbLogin();
  }

  let content = false;

  if (loading) {
    content = (<div>Carregando...</div>);
  } else if(error) {
    content = (<div>{String(error)}</div>);
  } else if(user.id) {
    content = (
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  } else {
    content = (
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
    );
  }

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Minha Conta</h3>

      {content}
    </section>
  )
}
