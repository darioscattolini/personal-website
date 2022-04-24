import { MarkdownContent } from '@site/src/utilities/markdown-content';

export type SkillData = {
  picture: {
    srcLight: string;
    srcDark: string;
    alt: string;
  };
  name: string;
  description: MarkdownContent;
  confidence: 0 | 1 | 2 | 3 | 4 | 5;
};
