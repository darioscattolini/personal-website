import React from 'react';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import styles from './Header.module.css';

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

export default function Header({title, subtitle, imgSrc}: Props) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={"container " + styles.heroBannerContainer}>
        <div className={styles.heroBannerImage}>
          <img src={imgSrc} />
        </div>

        <div className={styles.heroBannerText}>
          <h1 className={styles.heroTitle}>{ title }</h1>
          <div className={styles.heroSubtitle}>
            <Typewriter onInit={(typewriter) => {
              typewriter.pasteString('> ', null).typeString(subtitle).start();
            }} />
          </div>
        </div>
      </div>
    </header>
  );
}
