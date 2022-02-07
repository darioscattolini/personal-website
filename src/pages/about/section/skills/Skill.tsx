type Mastery = 'confident' | 'acquainted';

export type Skill = {
  picture: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  mastery: Mastery;
};
