import React, { useRef } from 'react';
import { translate } from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';
import { useIntersection } from '@site/src/hooks/use-intersection';
import Div3D from '../../shared/Div3D/Div3D';
import { ExperienceLandmark } from './experience-landmark';
import styles from './Experience.module.css';

type Props = {
  landmarks: ExperienceLandmark[];
}

type LmType = ExperienceLandmark['type'];

function imgSrc(type: LmType) {
  const folder = 'img/experience/';

  return folder + (type === 'work' ? 'work.svg' : 'education.svg');
}

function imgAlt(type: LmType) {
  return type === 'work' ? 
  translate({
    message: 'Work experience icon',
    description: 'Work experience icon alt text',
    id: 'about.experience.icons.work'
  }) :
  translate({
    message: 'Education icon',
    description: 'Education icon alt text',
    id: 'about.experience.icons.education'
  });
}

function datesTxt(dates: ExperienceLandmark['dates']): string {
  let datesTxt = ('start' in dates) ? `${dates.start} - ` : '';
  datesTxt += ('end' in dates) ? dates.end : 'actualidad';

  return datesTxt;
}

function buildLandmark(
  { type, role, site, description, picture, dates }: ExperienceLandmark,
  key: number
): JSX.Element {
  return (
    <Div3D key={ key } className={ styles.landmark }>
      <div className={ styles.icon }>
        <img src={ imgSrc(type) } alt={ imgAlt(type) } />
      </div>

      <div className={ styles.logo }>
        <ThemedImage alt={ picture.alt } title={ site } 
          sources={{
            light: picture.srcLight,
            dark: picture.srcDark
          }}
        />
      </div>

      <div className={ styles.landmarkText }>
        <p>{ datesTxt(dates) }</p>
        <h3>{ role }</h3>
        <h4>{ site }</h4>
        <>{ description.getJSXParsed() }</>
      </div>
    </Div3D>
  );
}

export default function Experience({ landmarks }: Props ): JSX.Element {
  const landmarksRef = useRef<HTMLDivElement>(null);
  const inViewport = useIntersection(landmarksRef, 50);  
  const classNames = 
    `${styles.landmarks} ${inViewport ? styles.inViewport : ''}`;

  return (
    <div className={ styles.container }>
      <div ref={ landmarksRef } className={ classNames }>
        { landmarks.map(buildLandmark) }
      </div>
    </div>
  );
}
