import { useAuth } from '../../../lib/auth/auth';
import LoginFacebookButton from '../../Social/LoginFacebookButton';
import styles from './SocialLoginWidget.module.scss'

export default function SocialLoginWidget() {
  const {
    loading,
    error,
    user,
  } = useAuth();

  let content = false;

  if (loading) {
    // Loading
    content = (<div>Carregando...</div>);
  } else if(user.id) {
    // Logged in
    content = (
      <div>
        Olá, {user.name}!
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </div>
    )
  } else {
    // Guest
    const errContent = error ? <div>{String(error)}</div> : false;
    
    content = (
      <div>
        <LoginFacebookButton />

        {errContent}
      </div>
    );
  }

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Minha Conta</h3>

      {content}
    </section>
  )
}
