import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
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
  message: `I have working knowledge of Node.js that has allowed me to write a few simple scripts and server-side apps. I have depeloped web crawlers using Puppeteer and APIs using the Nest framework.`,
  description: 'About page Node.js skill description',
  id: 'about.skills.nodejs.description'
});
const description = new MarkdownContent(descriptionMd);

export const nodeJs: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
