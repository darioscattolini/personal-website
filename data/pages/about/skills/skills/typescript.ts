import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import calcYearsLapse from '@site/src/utilities/calcYearsLapse';
import { SkillData } from "../../../../models";
import { links } from '../../../../misc/linksDictionary';

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

const descriptionMd = translate({
  message: `I started using [TypeScript]({tsLink}) {tsYears} years ago while learning [Angular]({angular}) and immediately fell in love with it. Whenever I need to develop something more complex than mere website interactivity I prefer to rely on the advantages of type-safety for preventing bugs, and in its object-oriented patterns for structuring complex code.`,
  description: 'About page typescript skill description',
  id: 'about.skills.typescript.description'
}, {
  angular: links.angular,
  tsLink: links.typescript,
  tsYears: calcYearsLapse({start: '2020-01-01'}, true)
});
const description = new MarkdownContent(descriptionMd);

export const typeScript: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
