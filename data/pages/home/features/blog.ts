import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { FeatureData } from '../../../models';

const title = translate({
  id: 'HomepageFeatures.blog.featureTitle',
  message: 'My blog',
  description: 'Blog feature title',
});

const imgSrc = translate({
  id: 'HomepageFeatures.blog.featureImage',
  message: '/img/blog.png',
  description: 'Blog feature image path',
});
// credits <a href='https://www.freepik.com/vectors/technology'>Technology
// vector created by stories - www.freepik.com</a>

const link = '/blog';

const descriptionMd = translate({
  id: 'HomepageFeatures.blog.featureDescription',
  message: `In my blog posts I share **not-so-technical information on broader issues**: I review content or tools I find useful, share projects I like and discuss topics not related to programming.`,
  description: 'Blog feature description',
});
const description = new MarkdownContent(descriptionMd);

export const blog: FeatureData = { title, imgSrc, link, description };
