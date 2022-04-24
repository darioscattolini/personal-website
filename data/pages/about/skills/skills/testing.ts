import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/testing.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Testing Icon',
  description: 'About page testing skill picture alt text',
  id: 'about.skills.testing.picture.alt'
});

const name = translate({
  message: 'Testing',
  description: 'About page testing skill name',
  id: 'about.skills.testing.name'
});

const descriptionMd = translate({
  message: `I have unit-tested [Angular]({angular}) apps and learnt how to test and mock JavaScript classes using [Jest]({jest}). While I've never written full integration tests for front-end apps, I've crawled websites using [Puppeteer]({puppeteer}) and know how to use this tool for UI automation testing. I've also used Jest alongside [Supertest]({supertest}) to write e2e tests of [Node.js]({nodejs})/[Nest]({nest}) APIs.`,
  description: 'About page testing skill description',
  id: 'about.skills.testing.description'
}, {
  angular: links.angular,
  jest: links.jest,
  nest: links.nest,
  nodejs: links.nodejs,
  puppeteer: links.puppeteer,
  supertest: links.supertest
});
const description = new MarkdownContent(descriptionMd);

export const testing: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
