import Head from 'next/head'
import styles from './PageBase.module.scss'
import { fbInit } from './facebook';
import { useEffect } from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';
import DesktopLeftMenu from '../DesktopLeftMenu/DesktopLeftMenu';

export default function PageBase({ banner, children }) {
  useEffect(() => {
    fbInit();
  }, []);

  return (
    <div className={styles.pageBase}>
      <SiteHeader />
      {!!banner && banner}
      <div className={styles.pageContainer}>
        <div className={styles.leftMenu}>
          <DesktopLeftMenu />
        </div>
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
