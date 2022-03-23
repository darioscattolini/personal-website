import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg';

const alt = translate({
  message: 'Jest Logo',
  description: 'About page jest skill picture alt text',
  id: 'about.skills.jest.picture.alt'
});

const name = translate({
  message: 'Jest',
  description: 'About page jest skill name',
  id: 'about.skills.jest.name'
});

const description = translate({
  message: `\
    I know how to set up and use the Jest testing framework for writing unit \
    tests for JavaScript and TypeScript apps. I'm familiar with built-in \
    and can extend them with custom matchers written by myself or from external
    libraries.\
  `,
  description: 'About page jest skill description',
  id: 'about.skills.jest.description'
});

export const jest: Skill = {
  picture: { src, alt },
  name,
  description,
  confidence: 4
}
