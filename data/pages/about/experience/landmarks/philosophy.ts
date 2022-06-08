import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { ExperienceLandmark } from '../../../../models';

const type: ExperienceLandmark['type'] = 'education';

const role = translate({
  message: 'Bachelor\'s Degree in Philosophy',
  description: 'About page philosophy experience role',
  id: 'about.experience.philosophy.role'
});

const dates: ExperienceLandmark['dates'] = { end: '2020-04' };

const site = 'Universidad Nacional de Córdoba (Argentina)';

const descriptionMd = translate({
  message: `Lalala`,
  description: 'About page philosophy experience description',
  id: 'about.experience.philosophy.description'
});
const description = new MarkdownContent(descriptionMd);

const picture: ExperienceLandmark['picture'] = {
  srcLight: '/img/experience/unc.png',
  srcDark: '/img/experience/unc.png',
  alt: 'Logo of Universidad Nacional de Córdoba'
};

export const philosophy: ExperienceLandmark = {
  type,
  role,
  dates,
  site,
  description,
  picture
}
