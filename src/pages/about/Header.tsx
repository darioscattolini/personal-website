import React from 'react';
import { translate } from '@docusaurus/Translate';

const title = translate({
  message: 'About Me',
  description: 'About page header title',
  id: 'about.header.title'
});

const subtitle = translate({
  message: 'I\'m Darío Scattolini, a junior web developer based in Barcelona.',
  description: 'About page header subtitle',
  id: 'about.header.subtitle'
});

const p1 = translate({
  message: `
    I was born in Argentina 33 years ago, and I'm living in Barcelona since 
    2019. I have a degree in Philosophy, but I've spent the last 3 years 
    training to become a software developer.
  `,
  description: 'About page header first paragraph',
  id: 'about.header.p1'
});

const p2 = translate({
  message: `
    During my training I've focused on front-end skills and technologies, 
    developing web pages and applications using JavaScript, TypeScript and 
    Angular. As a freelancer I've also worked with PrestaShop and back-end 
    technologies such as PHP, Symfony and MySQL.
  `,
  description: 'About page header second paragraph',
  id: 'about.header.p2'
});

const p3 = translate({
  message: `
    I have a logical and analytical mindset, feeling more at ease writing code
    and designing the logic of an application rather than thinking about
    aesthetics and visual design. That's why I'm leaning towards a full-stack
    profile.
  `,
  description: 'About page header third paragraph',
  id: 'about.header.p3'
});

export default function Header(): JSX.Element {
  return (
    <header className="hero hero--dark">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <div>
              <h1 className="hero__title">{ title }</h1>
              <p className="hero__subtitle margin-bottom--lg">{ subtitle }</p>
              <p>{ p1 }</p>
              <p>{ p2 }</p>
              <p>{ p3 }</p>
            </div>
          </div>

          <div className="col col--4" /*styles.heroBannerImage*/>
            <img src="img/programmer.png" />
          </div>
        </div>
      </div>
    </header>
  );
}
