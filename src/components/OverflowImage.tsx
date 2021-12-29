import React from 'react';
import styles from './OverflowImage.module.css';

export default function OverflowImage(props): JSX.Element {
  return(
    <p className={styles.container}>
      <img 
        src={ props.src }
        alt={ props.alt }
        style={{ 
          minWidth: props.minWidth,
          maxWidth: props.maxWidth ? props.maxWidth : 'none'
        }} 
      />
    </p>
  );
}
