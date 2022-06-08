import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { ExperienceLandmark } from '../../../../models';

const type: ExperienceLandmark['type'] = 'education';

const role = translate({
  message: 'PhD Fellow',
  description: 'About page conicet experience role',
  id: 'about.experience.conicet.role'
});

const dates: ExperienceLandmark['dates'] = { 
  start: '2017-04',
  end: '2019-10'
};

const site = 'CONICET (Argentina)';

const descriptionMd = translate({
  message: `Lalala`,
  description: 'About page conicet experience description',
  id: 'about.experience.conicet.description'
});const description = new MarkdownContent(descriptionMd);

const picture: ExperienceLandmark['picture'] = {
  srcLight: '/img/experience/conicet.svg',
  srcDark: '/img/experience/conicet.svg',
  alt: 'CONICET logo'
};

export const conicet: ExperienceLandmark = {
  type,
  role,
  dates,
  site,
  description,
  picture
}
