import React from 'react';
import Layout from '@theme/Layout';
import Header from './Header';
import Section from './section/Section';
import { ExperienceHeader } from './section/experience/ExperienceHeader';
import { PortfolioHeader } from './section/portfolio/PortfolioHeader';
import { aboutData, skillsData } from '../../../data/data';
import Skills from './section/skills/Skills';

export default function About(): JSX.Element {
  return (
    <Layout 
      title={ aboutData.metaTitle }
      description={ aboutData.metaDescription }
    >
      <Header 
        title={ aboutData.headerTitle }
        subtitle={ aboutData.headerSubtitle }
        content={ aboutData.headerContent }
        imgPath={ aboutData.headerImgPath }
      />

      <main>
        <Section { ...skillsData.header }>
          <Skills skills={ skillsData.skills } />
        </Section>

        <Section {...PortfolioHeader} dark>
          <div></div>
        </Section>

        <Section {...ExperienceHeader}>
          <div></div>
        </Section>
      </main>
    </Layout>
  );
}
