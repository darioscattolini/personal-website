import { translate } from '@docusaurus/Translate';
import { FeatureData } from '../../models';
import { about } from './features/about';
import { blog } from './features/blog';
import { codingPapers } from './features/codingPapers';

const metaTitle = translate({
  message: 'Darío Scattolini | Front-end developer based in Barcelona',
  description: 'Home Page meta title',
  id: 'index.meta.title'
});

const metaDescription = translate({
  message: `\
    Personal website of Darío Scattolini - Junior web developer - Articles on \
    programming, blog posts, portfolio and more...\
  `,
  description: 'Home Page meta description',
  id: 'index.meta.description'
});

const headerTitle = 'Darío Scattolini';

const headerImgSrc = 'img/programmer.png';

const headerSubtitle = translate({
  message: 'Front-end developer with full-stack inclinations',
  description: 'Header/hero subtitle in Home Page',
  id: 'index.header.subtitle'
});

const aboutTitle = translate({
  message: 'Hi! I\'m Darío. Welcome to my website!',
  description: 'About title in Home Page',
  id: 'index.about.title'
});

const aboutContent = translate({
  message: `\
    I'm a junior web developer (and philosopher!) with a focus on the \
    front-end side of the JavaScript technology stack. I started coding in \
    2019, and soon became quite skilled in JavaScript and Angular. Working \
    as a freelancer I also had the chance to get involved with PrestaShop, \
    PHP and Symfony. I'm 32 years old, from Argentina, and I currently live \
    in Barcelona.\
  `,
  description: 'About content in Home Page',
  id: 'index.about.content'
});

const aboutFeatures: FeatureData[] = [codingPapers, blog, about];

export {
  metaTitle,
  metaDescription,
  headerTitle,
  headerSubtitle,
  headerImgSrc,
  aboutTitle,
  aboutContent,
  aboutFeatures
}
