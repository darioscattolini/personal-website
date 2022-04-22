import React from 'react';
import Layout from '@theme/Layout';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/home/Header/Header';
import Feature from '@site/src/components/home/Feature/Feature';
import styles from './index.module.css';
import { homeData as data } from '@site/data/data';

// const { siteConfig } = useDocusaurusContext();
// site title hard-coded here until config file allows translation

export default function Home(): JSX.Element {
  return (
    <Layout 
      title={ data.metaTitle }
      description={ data.metaDescription }
    >
      <Header 
        title={ data.headerTitle}
        subtitle={ data.headerSubtitle }
        imgSrc={ data.headerImgSrc }
      />

      <main>
        <section className={ "container " + styles.about }>
          <h1>{ data.aboutTitle }</h1>
          <p>{ data.aboutContent }</p>
        </section>
        
        <section className={styles.features}>
          <div className="container">
            <div className="row">{
              data.aboutFeatures.map((props, key) => (
                <Feature key={key} {...props} />
              ))
            }</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
