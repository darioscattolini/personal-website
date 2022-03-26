type Mastery = 'confident' | 'acquainted';

export type Skill = {
  picture: {
    srcLight: string;
    srcDark: string;
    alt: string;
  };
  name: string;
  description: string;
  confidence: 0 | 1 | 2 | 3 | 4 | 5;
};
