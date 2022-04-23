import { translate } from "@docusaurus/Translate";
import calcYearsLapse from '../../../../../src/utilities/calcYearsLapse';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'TypeScript Logo',
  description: 'About page typescript skill picture alt text',
  id: 'about.skills.typescript.picture.alt'
});

const name = translate({
  message: 'TypeScript',
  description: 'About page typescript skill name',
  id: 'about.skills.typescript.name'
});

const description = translate({
  message: `\
    I started using TypeScript {tsYears} years ago while learning Angular and \
    immediately fell in love with it. Whenever I need to develop something \
    more complex than mere website interactivity I prefer to rely on the \
    advantages of type-safety for preventing bugs, and in its object-oriented \
    patterns for structuring complex code.\
  `,
  description: 'About page typescript skill description',
  id: 'about.skills.typescript.description'
}, {
  tsYears: calcYearsLapse({start: '2020-01-01'}, true)
});

export const typeScript: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
