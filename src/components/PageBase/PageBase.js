import Head from 'next/head'
import styles from './PageBase.module.scss'
import { fbInit } from './facebook';
import { useEffect } from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';

export default function PageBase({ children }) {
  useEffect(() => {
    fbInit();
  }, []);

  return (
    <div className={styles.pageBase}>
      <SiteHeader />
      {children}
    </div>
  );
}
