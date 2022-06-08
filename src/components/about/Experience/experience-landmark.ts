import { MarkdownContent } from '@site/src/utilities/markdown-content';

type FullDates = {
  start: string;
  end: string;
}

export type ExperienceLandmark = {
  type: 'education' | 'work';
  role: string;
  dates: FullDates | Pick<FullDates, 'start'> | Pick<FullDates, 'end'>;
  site?: string;
  description: MarkdownContent;
  picture: {
    srcLight: string;
    srcDark: string;
    alt: string;
  }
};
