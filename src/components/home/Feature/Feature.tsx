import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FeatureData } from './feature-data';

export default function Feature(
  {title, imgSrc, link, description}: FeatureData
): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={ link }>
          <img height="250" alt={ title } src={ imgSrc } />
        </Link>
      </div>

      <div className="text--center padding-horiz--md">
        <Link to={ link }>
          <h3>{ title }</h3>
        </Link>

        <p>{ description }</p>
      </div>
    </div>
  );
}
