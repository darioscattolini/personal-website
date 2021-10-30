import React from 'react';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={"container " + styles.heroBannerContainer}>
        <div className={styles.heroBannerImage}>
          <img src="img/programmer.png"></img>
        </div>

        <div className={styles.heroBannerText}>
          <h1 className={styles.heroTitle}>Darío Scattolini</h1>
          <div className={styles.heroSubtitle}><Typewriter 
            onInit={(typewriter) => {
              const content = translate({
                message: 'Front-end developer with full-stack inclinations',
                id: 'index.header'
              });

              typewriter
                .pasteString('> ', null)
                .typeString(content)
                .start();
            }}
          /></div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className={"container " + styles.about}>
      <h1>Hi! I'm Darío. Welcome to my website!</h1>
      <p>
        I'm a junior web developer (and philosopher!) with a focus on the 
        front-end side of the JavaScript technology stack. I started coding in 
        2019, and soon became quite skilled in JavaScript and Angular. Working 
        as a freelancer I also had the chance to get involved with PrestaShop, 
        PHP and Symfony. I'm 32 years old, from Argentina, and I currently live
        in Barcelona. 
      </p>
    </section>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <HomepageHeader />
      
      <main>
        <About />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
