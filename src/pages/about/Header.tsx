import React from 'react';
import SplitParagraphs from '../../components/SplitParagraphs/SplitParagraphs';

type AboutHeaderProps = {
  title: string;
  subtitle: string;
  content: string;
  imgPath: string;
};

export default function Header(
  { title, subtitle, content, imgPath }: AboutHeaderProps
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
            <img src={ imgPath } />
          </div>
        </div>
      </div>
    </header>
  );
}
