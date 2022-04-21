import { translate } from '@docusaurus/Translate';

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

const headerTitle = translate({
  message: 'About Me',
  description: 'About page header title',
  id: 'about.header.title'
});

const headerSubtitle = translate({
  message: 'I\'m Darío Scattolini, a junior web developer based in Barcelona.',
  description: 'About page header subtitle',
  id: 'about.header.subtitle'
});

const headerContent = translate({
  message: `\
    I was born in Argentina 33 years ago, and I'm living in Barcelona since \
    2019. I have a degree in Philosophy, but I've spent the last 3 years \
    training to become a software developer.
    During my training I've focused on front-end skills and technologies, \
    developing web pages and applications using JavaScript, TypeScript and \
    Angular. As a freelancer I've also worked with PrestaShop and back-end \
    technologies such as PHP, Symfony and MySQL.
    I have a logical and analytical mindset, feeling more at ease writing code \
    and designing the logic of an application rather than thinking about \
    aesthetics and visual design. That's why I'm leaning towards a full-stack \
    profile.\
  `,
  description: 'About page header content',
  id: 'about.header.p1'
});

const headerImgPath = 'img/programmer.png';

export { 
  metaTitle, 
  metaDescription,
  headerTitle,
  headerSubtitle,
  headerContent,
  headerImgPath
}
