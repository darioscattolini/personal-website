import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
/*
function Feature({title, image, link, description}) {
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
}*/

export default function OverflowImage(props): JSX.Element {
  return(
    <div>
      <img style={{ minWidth: props.minWidth }}></img>
    </div>
  );
}
