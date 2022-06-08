import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { ExperienceLandmark } from '../../../../models';

const type: ExperienceLandmark['type'] = 'work';

const role = translate({
  message: 'Social Media Content Moderator',
  description: 'About page majorel content moderator experience role',
  id: 'about.experience.majorel-content-moderator.role'
});

const dates: ExperienceLandmark['dates'] = {
  start: '2020-11',
  end: '2022-04'
};

const site = 'Majorel (Barcelona)';

const descriptionMd = translate({
  message: `Lalala`,
  description: 'About page majorel content moderator experience description',
  id: 'about.experience.majorel-content-moderator.description'
});
const description = new MarkdownContent(descriptionMd);

const picture: ExperienceLandmark['picture'] = {
  srcLight: '/img/experience/majorel.svg',
  srcDark: '/img/experience/majorel-dark.svg',
  alt: 'Majorel company logo'
};

export const majorelModerator: ExperienceLandmark = {
  type,
  role,
  dates,
  site,
  description,
  picture
}
