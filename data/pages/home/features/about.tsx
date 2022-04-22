import React from 'react';
import { translate } from '@docusaurus/Translate';
import { FeatureData } from '../../../models';

const title = translate({
  id: 'HomepageFeatures.about.featureTitle',
  message: 'About me',
  description: 'About feature title',
});

const imgSrc = translate({
  id: 'HomepageFeatures.about.featureImage',
  message: '/img/about.png',
  description: 'About feature image path',
});
// credits <a href='https://www.freepik.com/vectors/computer'>Computer vector
// created by stories - www.freepik.com</a>

const link = '/about';

const descriptionContent = translate({
  id: 'HomepageFeatures.about.featureDescription',
  message: `\
    You can also find more information about me, such as a short bio, a \
    description of my skills and experience, and a portfolio with a \
    selection of my most relevant projects.\
  `,
  description: 'About feature description',
});

const description: JSX.Element = <>{ descriptionContent }</>;

export const about: FeatureData = { title, imgSrc, link, description };
