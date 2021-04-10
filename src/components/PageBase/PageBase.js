import Head from 'next/head'
import styles from './PageBase.module.scss'
import { fbInit } from './facebook';
import { useEffect } from 'react';

export default function PageBase({ children }) {
  useEffect(() => {
    fbInit();
  }, []);

  return (
    <div className={styles.pageBase}>
      {children}
    </div>
  );
}
