import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Nest Logo',
  description: 'About page Nest skill picture alt text',
  id: 'about.skills.nest.picture.alt'
});

const name = translate({
  message: 'Nest',
  description: 'About page Nest skill name',
  id: 'about.skills.nest.name'
});

const descriptionMd = translate({
  message: `As I come from an [Angular]({angular}) background, [Nest]({nest}) was an easy choice as [Node.js]({nodejs}) framework for server-side apps, since its architecture and dependency injection system are inspired by Angular. I have used Nest alongside [TypeORM]({typeorm}) in the development of simple web APIs.`,
  description: 'About page Nest skill description',
  id: 'about.skills.nest.description'
}, {
  angular: links.angular,
  nest: links.nest,
  nodejs: links.nodejs,
  typeorm: links.typeorm
});
const description = new MarkdownContent(descriptionMd);

export const nest: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
