import Head from 'next/head'
import styles from './PageBase.module.scss'
import { fbInit } from './facebook';
import { useEffect } from 'react';
import { MUTATION_FACEBOOK_LOGIN, useAuth } from '../../lib/auth/auth';
import { useMutation } from '@apollo/client';

export default function PageBase({ children }) {
  const [
    // loading,
    errorMessage,
    setLoading,
  ] = useAuth(state => [
    state.loading,
    state.errorMessage,
    state.setLoading
  ]);
  const [facebookLogin, { data, error, loading }] = useMutation(MUTATION_FACEBOOK_LOGIN);

  useEffect(() => {
    // setLoading(true);
    // Check if user is logged in on Facebook
    // https://developers.facebook.com/docs/facebook-login/web#checklogin
    fbInit()
      .then(async ({ status, authResponse: { accessToken, userID } }) => {
        if (status === 'connected') {
          console.log('logged in as ', userID, accessToken);
          try {
            await facebookLogin(
              { variables: { accessToken, userID }},
            );
          } catch(error) {
            console.log('cheguey');
          }
        }
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
