import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import Typewriter from 'typewriter-effect';
import styles from './index.module.css';
import { indexData } from '@site/data/data';

// const { siteConfig } = useDocusaurusContext();
// site title hard-coded here until config file allows translation

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={"container " + styles.heroBannerContainer}>
        <div className={styles.heroBannerImage}>
          <img src={indexData.bannerImgSrc}></img>
        </div>

        <div className={styles.heroBannerText}>
          <h1 className={styles.heroTitle}>Darío Scattolini</h1>
          <div className={styles.heroSubtitle}>
            <Typewriter onInit={(typewriter) => {
              typewriter
                .pasteString('> ', null)
                .typeString(indexData.heroSubtitle)
                .start();
            }} />
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className={"container " + styles.about}>
      <h1>{ indexData.aboutTitle }</h1>
      <p>{ indexData.aboutContent }</p>
    </section>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout 
      title={ indexData.metaTitle }
      description={ indexData.metaDescription }
    >
      <HomepageHeader />    
      <main>
        <About />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
