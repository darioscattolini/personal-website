import { translate } from "@docusaurus/Translate";
import { Skill } from "../../../../models";

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

const description = translate({
  message: `\
    I have unit-tested Angular apps and learnt how to test and mock JavaScript \
    classes using Jest. While I've never written full integration tests for \
    front-end apps, I've crawled websites using Puppeteer and know how to use \
    this tool for UI automation testing. I've also used Jest alongside \
    Supertest to write e2e tests of Node.js/Nest.js APIs.\
  `,
  description: 'About page testing skill description',
  id: 'about.skills.testing.description'
});

export const testing: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
