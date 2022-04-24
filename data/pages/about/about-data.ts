import { translate } from '@docusaurus/Translate';
import calcYearsLapse from '@site/src/utilities/calcYearsLapse';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { experienceSectionData } from './experience/experience';
import { portfolioSectionData } from './portfolio/portfolio';
import { skillsSectionData } from './skills/skills';

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

const headerContentMd = translate({
  message: `I was born in Argentina {age} years ago, and I'm living in Barcelona since 2019. I have a degree in Philosophy, but I've spent the last {training} years training to become a software developer.\n\n During my training I've focused on front-end skills and technologies, developing web pages and applications using JavaScript, TypeScript and Angular. As a freelancer I've also worked with PrestaShop and back-end technologies such as PHP, Symfony and MySQL.\n\n I have a logical and analytical mindset, feeling more at ease writing code and designing the logic of an application rather than thinking about aesthetics and visual design. That's why I'm leaning towards a full-stack profile.`,
  description: 'About page header content',
  id: 'about.header.p1'
}, {
  age: calcYearsLapse({start: '1989-01-21'}),
  training: calcYearsLapse({start: '2019-01-01'}, true)
});
const headerContent = new MarkdownContent(headerContentMd);

const headerImgSrc = 'img/programmer.png';

export { 
  metaTitle, 
  metaDescription,
  headerTitle,
  headerSubtitle,
  headerContent,
  headerImgSrc,
  skillsSectionData,
  portfolioSectionData,
  experienceSectionData
}
