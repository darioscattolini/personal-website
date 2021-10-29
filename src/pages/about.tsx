import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function About(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="About Darío Scattolini: short bio, skills, experience and portfolio">

      <main>
        <p>
          I have a strong logical and analytical mindset: I feel at ease with 
          programming rather than aesthetics and design, so I lean towards a 
          full-stack profile. As a philosopher I also favour a systematic and 
          principled approach to coding. I'm not happy just with getting things 
          done: I need to understand what's going on, so I take my time to learn 
          and systematize my knowledge on the inner working and the murky parts of
          the tools and languages I use. 
        </p>
      </main>
    </Layout>
  );
}
