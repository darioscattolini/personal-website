import { MarkdownContent } from '@site/src/utilities/markdown-content';

export type FeatureData = {
  title: string;
  imgSrc: string;
  link?: string;
  description: MarkdownContent;
};
