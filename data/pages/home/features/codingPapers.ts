import { translate } from '@docusaurus/Translate';
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { FeatureData } from '../../../models';

const title = translate({
  id: 'HomepageFeatures.codingPapers.featureTitle',
  message: 'Pieces of knowledge',
  description: 'Coding papers feature title',
});

const imgSrc = translate({
  id: 'HomepageFeatures.codingPapers.featureImage',
  message: '/img/papers.png',
  description: 'Coding papers feature image path',
});
// credits: <a href='https://www.freepik.com/vectors/business'>Business vector
// created by freepik - www.freepik.com</a>

const link = '/docs/intro';

const descriptionMd = translate({
  id: 'HomepageFeatures.codingPapers.featureDescription',
  message: `My coding papers contain **short technical writings**. Whenever I find out something worth sharing I include it here: coding tips, techniques to solve particular problems, bits of theory, etc.`,
  description: 'Coding papers feature description',
});
const description = new MarkdownContent(descriptionMd);

export const codingPapers: FeatureData = { title, imgSrc, link, description };
