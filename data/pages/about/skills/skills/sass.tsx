import { translate } from "@docusaurus/Translate";
import { Skill } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Sass Logo',
  description: 'About page sass skill picture alt text',
  id: 'about.skills.sass.picture.alt'
});

const name = translate({
  message: 'Sass',
  description: 'About page sass skill name',
  id: 'about.skills.sass.name'
});

const description = translate({
  message: `\
    I'm familiar with Sass preprocessor, and especially with the SCSS syntax. \
    I prefer to use it when projects start to scale, for example in Angular \
    applications, leveraging features such as variables, modules, selector \
    nesting and inheritance, etc.\ 
  `,
  description: 'About page sass skill description',
  id: 'about.skills.sass.description'
});

export const sass: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
