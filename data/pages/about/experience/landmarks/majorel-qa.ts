import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { ExperienceLandmark } from '../../../../models';

const type: ExperienceLandmark['type'] = 'work';

const role = translate({
  message: 'Quality Analyst',
  description: 'About page majorel QA experience role',
  id: 'about.experience.majorel-qa.role'
});

const dates: ExperienceLandmark['dates'] = { start: '2022-04' };

const site = 'Majorel (Barcelona)';

const descriptionMd = translate({
  message: `Lalala`,
  description: 'About page majorel QA experience description',
  id: 'about.experience.majorel-qa.description'
});
const description = new MarkdownContent(descriptionMd);

const picture: ExperienceLandmark['picture'] = {
  srcLight: '/img/experience/majorel.svg',
  srcDark: '/img/experience/majorel-dark.svg',
  alt: 'Majorel company logo'
};

export const majorelQA: ExperienceLandmark = {
  type,
  role,
  dates,
  site,
  description,
  picture
}
