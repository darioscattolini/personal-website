import React from 'react';
import { translate } from '@docusaurus/Translate';
import { FeatureItem } from '../FeatureItem';

const title = translate({
  id: 'HomepageFeatures.blog.featureTitle',
  message: 'My blog',
  description: 'Blog feature title',
});

const image = translate({
  id: 'HomepageFeatures.blog.featureImage',
  message: '/img/blog.png',
  description: 'Blog feature image path',
});
// credits <a href='https://www.freepik.com/vectors/technology'>Technology
// vector created by stories - www.freepik.com</a>

const link = '/blog';

const descriptionContent = translate({
  id: 'HomepageFeatures.blog.featureDescription',
  message: `
    In my blog posts I share information on broader issues: I review content
    or tools I find useful, share projects I like and discuss topics not 
    related to programming.
  `,
  description: 'Blog feature description',
});

const description: JSX.Element = <>{ descriptionContent }</>;

export const blog: FeatureItem = { title, image, link, description };
