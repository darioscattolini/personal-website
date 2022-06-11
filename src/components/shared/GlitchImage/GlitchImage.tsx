import React from 'react';
import styles from './GlitchImage.module.css';

export default function GlitchImage(props: { url: string }): JSX.Element {
  const backgroundImage = `url(${props.url})`;
  console.log(backgroundImage);

  return (
    <div className={ styles.container } style={{ backgroundImage }}>
      <div className={ styles.child } style={{ backgroundImage }}></div>
    </div>
  );
}
