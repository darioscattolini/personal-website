import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/rest-api.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'REST APIs Icon',
  description: 'About page REST APIs skill picture alt text',
  id: 'about.skills.restapis.picture.alt'
});

const name = translate({
  message: 'REST APIs',
  description: 'About page REST APIs skill name',
  id: 'about.skills.restapis.name'
});

const descriptionMd = translate({
  message: `I'm familiar with REST APIs, both as a consumer and as a developer.\n\n As a consumer, I know how to navigate API docs in order to write proper API calls and integrate web APIs in my apps.\n\n I've also developed simple APIs with [Node.js]({nodejs}), [Nest]({nest}) and [TypeORM]({typeorm}). I can test APIs with [Postman]({postman}) and e2e tests.`,
  description: 'About page REST APIs skill description',
  id: 'about.skills.restapis.description'
}, {
  nest: links.nest,
  nodejs: links.nodejs,
  postman: links.postman,
  typeorm: links.typeorm
});
const description = new MarkdownContent(descriptionMd);

export const restApis: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
