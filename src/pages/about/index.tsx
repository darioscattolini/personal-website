import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Header from './Header';
import Section from './section/Section';
import { ExperienceHeader } from './section/experience/ExperienceHeader';
import { PortfolioHeader } from './section/portfolio/PortfolioHeader';
import { skillsData } from '../../../data/data';
import Skills from './section/skills/Skills';

const metaTitle = translate({
  message: 'Darío Scattolini | Front-end developer based in Barcelona | About me',
  description: 'About page meta title',
  id: 'about.meta.title'
});

const metaDescription = translate({
  message: 'About Darío Scattolini: bio, skills, experience and portfolio',
  description: 'About page meta description',
  id: 'about.meta.description'
});

export default function About(): JSX.Element {
  return (
    <Layout title={ metaTitle } description={ metaDescription }>
      <Header />

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
