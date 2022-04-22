import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/about/Header/Header';
import Section from '@site/src/components/about/Section/Section';
import Skills from '@site/src/components/about/Skills/Skills';
import { aboutData as data } from '@site/data/data';

export default function About(): JSX.Element {
  return (
    <Layout 
      title={ data.metaTitle }
      description={ data.metaDescription }
    >
      <Header 
        title={ data.headerTitle }
        subtitle={ data.headerSubtitle }
        content={ data.headerContent }
        imgSrc={ data.headerImgSrc }
      />

      <main>
        <Section { ...data.skillsSectionData.header }>
          <Skills skills={ data.skillsSectionData.skills } />
        </Section>

        <Section { ...data.portfolioSectionData.header } dark>
          <div></div>
        </Section>

        <Section { ...data.experienceSectionData.header }>
          <div></div>
        </Section>
      </main>
    </Layout>
  );
}
