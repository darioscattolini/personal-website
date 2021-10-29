/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  link?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pieces of knowledge',
    image: '/img/papers.png',
    link: '/papers',
    description: (
      <>
        My coding papers contain short technical writings. Whenever I find out 
        something worth sharing I include it here: coding tips, techniques to
        solve particular problems, bits of theory, etc.
      </>
    ),
    // credits: <a href='https://www.freepik.com/vectors/business'>Business vector created by freepik - www.freepik.com</a>
  },
  {
    title: 'My blog',
    image: '/img/blog.png',
    link: '/blog',
    description: (
      <>
        In my blog posts I share information on broader issues: I review content
        or tools I find useful, share projects I like and discuss topics not 
        related to programming.
      </>
    ),
    // credits <a href='https://www.freepik.com/vectors/technology'>Technology vector created by stories - www.freepik.com</a>
  },
  {
    title: 'About me',
    image: '/img/about.png',
    link: '/about',
    description: (
      <>
        You can also find more information about me, such as a short bio, a 
        description of my skills and experience, and a portfolio with a 
        selection of my most relevant projects.
      </>
    ),
    // credits <a href='https://www.freepik.com/vectors/computer'>Computer vector created by stories - www.freepik.com</a>
  },
];

function Feature({title, image, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <img className={styles.featureSvg} alt={title} src={image} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
