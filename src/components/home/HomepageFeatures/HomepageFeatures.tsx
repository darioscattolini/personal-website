import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import { FeatureItem } from './FeatureItem';
import { codingPapers } from './features/codingPapers';
import { blog } from './features/blog';
import { about } from './features/about';

const FeatureList: FeatureItem[] = [ codingPapers, blog, about ];

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
