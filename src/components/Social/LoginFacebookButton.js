import { useMutation } from '@apollo/client';
import Head from 'next/head'
import { MUTATION_FACEBOOK_LOGIN, useAuth } from '../../lib/auth/auth';
import { fbLogin } from '../PageBase/facebook';
import styles from './LoginFacebookButton.module.scss'

export default function LoginFacebookButton() {
  const {
    setLoading,
    setUser,
   } = useAuth();
  const [facebookLogin, { error, loading }] = useMutation(MUTATION_FACEBOOK_LOGIN);

  const loginWithFacebook = async () => {
    const { status, authResponse: { accessToken, userID } } = await fbLogin();
    if (status === 'connected') {
      setLoading(true);
      try {
        const res = await facebookLogin(
          { variables: { accessToken, userID }},
        );
        const facebookLoginRes = res.data.facebookLogin;
        setUser(
          facebookLoginRes.accessToken,
          facebookLoginRes.user,
        );
      } catch(error) {
        console.log('LoginFacebookButton.js@loginWithFacebook catch: ', error);
        setLoading(false);
      }
    }
  }

  if (loading) return <div>Carregando...</div>

  return (
    <button className={styles.wrapper} onClick={loginWithFacebook}>
      <span className={styles.icon}></span>
      <span className={styles.label}>
        Entrar com Facebook
      </span>
    </button>
  )
}
