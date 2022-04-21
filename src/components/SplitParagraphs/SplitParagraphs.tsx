import React from 'react';

export default function SplitParagraphs(
  props: { paragraphs: string }
): JSX.Element {
  return <div>{
    props.paragraphs
      .split('\n')
      .map((content, key) => <p key={ key }> { content } </p>)
  }</div>;
}
