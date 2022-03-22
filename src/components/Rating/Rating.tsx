import React from 'react';
import styles from './Rating.module.css';

type Props = {
  value: number;
  total: number;
}

export default function Rating(props: Props): JSX.Element {
  // should add some validators for props (integers, positive, value < total).
  const stars: JSX.Element[] = [];
  
  for (let i = 1; i <= props.total; i++) {
    if (props.value >= i) {
      stars.push(<span>&#9733;</span>);
    } else {
      stars.push(<span>&#9734;</span>);
    }
  }
  
  return <span className={ styles.stars }>{ stars }</span>;
}
