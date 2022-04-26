import React from 'react';
import { JSXParsed } from '@site/src/utilities/jsx-parsed';

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
  children: JSXParsed;
};

export default function Header(
  { title, subtitle, imgSrc, children }: Props
): JSX.Element {
  return (
    <header className="hero hero--dark">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <div>
              <h1 className="hero__title">{ title }</h1>
              <p className="hero__subtitle margin-bottom--lg">{ subtitle }</p>
              { children }
            </div>
          </div>

          <div className="col col--4">
            <img src={ imgSrc } />
          </div>
        </div>
      </div>
    </header>
  );
}
