import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { ExperienceLandmark } from '../../../../models';

const type: ExperienceLandmark['type'] = 'education';

const role = translate({
  message: 'Front End Developer Program',
  description: 'About page it academy experience role',
  id: 'about.experience.it-academy.role'
});

const dates: ExperienceLandmark['dates'] = { 
  start: '2019-11',
  end: '2020-04'
};

const site = 'IT Academy, Barcelona Activa (Barcelona)';

const descriptionMd = translate({
  message: `Lalala`,
  description: 'About page it academy experience description',
  id: 'about.experience.it-academy.description'
});
const description = new MarkdownContent(descriptionMd);

const picture: ExperienceLandmark['picture'] = {
  srcLight: '/img/experience/barcelona-activa.svg',
  srcDark: '/img/experience/barcelona-activa-dark.svg',
  alt: 'Logo of Barcelona Activa'
};

export const itAcademy: ExperienceLandmark = {
  type,
  role,
  dates,
  site,
  description,
  picture
}
