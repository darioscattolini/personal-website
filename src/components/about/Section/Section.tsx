import React, { ReactChild, ReactChildren } from 'react';
import styles from './Section.module.css';
import { SectionHeaderData } from './section-header-data';

type Props = SectionHeaderData & { 
  children: ReactChild | ReactChildren;
  dark?: boolean;
};

export default function Section(
  { name, title, description, children, dark }: Props
): JSX.Element {
  return (
    <section 
      className={`${styles.container} ${dark ? styles.dark : ''}`}
    >
      <div className="container">
        <header className={styles.header}>
          <h3 className={styles.sectionName}>{ name }</h3>
          <h2 className={styles.title}>{ title }</h2>
          <p>{ description }</p>
        </header>

        <main>{ children }</main>
      </div>
    </section>
  );
}
