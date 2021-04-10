import Head from 'next/head'
import styles from './PageBase.module.scss'
import { fbInit } from './facebook';
import { useEffect } from 'react';
import { MUTATION_FACEBOOK_LOGIN, useAuth } from '../../lib/auth/auth';
import { useMutation } from '@apollo/client';

export default function PageBase({ children }) {
  const {
    setLoading,
    setUser,
   } = useAuth();
  const [facebookLogin, { error, loading }] = useMutation(MUTATION_FACEBOOK_LOGIN);

  useEffect(() => {
    setLoading(true);
    // Check if user is logged in on Facebook
    // https://developers.facebook.com/docs/facebook-login/web#checklogin
    fbInit()
      .then(async ({ status, authResponse: { accessToken, userID } }) => {
        if (status === 'connected') {
          console.log('logged in as ', userID, accessToken);
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
            console.log('cheguey');
          }
        }

        setLoading(false);
      })
      .catch(error => {
        // @TODO
      });
    

  }, []);

  if (loading) return (
    <div>loading</div>
  );

  if (error) return (
    <div>{String(error)}</div>
  )

  return (
    <div className={styles.pageBase}>
      {children}
    </div>
  )
}
