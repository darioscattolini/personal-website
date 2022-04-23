import { translate } from "@docusaurus/Translate";
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

const description = translate({
  message: `\
    Coming from an Angular background, I found Nest the most appropriate \
    option as Node.js framework for server-side apps, since its architecture \
    and dependency injection system are inspired by Angular. I have used Nest \
    alongside TypeORM in the development of simple web APIs.\ 
  `,
  description: 'About page Nest skill description',
  id: 'about.skills.nest.description'
});

export const nest: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
