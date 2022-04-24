import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Node.js Logo',
  description: 'About page Node.js skill picture alt text',
  id: 'about.skills.nodejs.picture.alt'
});

const name = translate({
  message: 'Node.js',
  description: 'About page Node.js skill name',
  id: 'about.skills.nodejs.name'
});

const descriptionMd = translate({
  message: `I have working knowledge of [Node.js]({nodejs}) that has allowed me to write a few simple scripts and server-side apps. I have depeloped web crawlers using [Puppeteer]({puppeteer}) and APIs using the [Nest]({nest}) framework together with [TypeORM]({typeorm}).`,
  description: 'About page Node.js skill description',
  id: 'about.skills.nodejs.description'
}, {
  nest: links.nest,
  nodejs: links.nodejs,
  puppeteer: links.puppeteer,
  typeorm: links.typeorm
});
const description = new MarkdownContent(descriptionMd);

export const nodeJs: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
