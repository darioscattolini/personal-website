import React from 'react';
import SplitParagraphs from '@site/src/components/shared/SplitParagraphs/SplitParagraphs';

type Props = {
  title: string;
  subtitle: string;
  content: string;
  imgSrc: string;
};

export default function Header(
  { title, subtitle, content, imgSrc }: Props
): JSX.Element {
  return (
    <header className="hero hero--dark">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <div>
              <h1 className="hero__title">{ title }</h1>
              <p className="hero__subtitle margin-bottom--lg">{ subtitle }</p>
              <SplitParagraphs paragraphs={ content } />
            </div>
          </div>

          <div className="col col--4" /*styles.heroBannerImage*/>
            <img src={ imgSrc } />
          </div>
        </div>
      </div>
    </header>
  );
}
