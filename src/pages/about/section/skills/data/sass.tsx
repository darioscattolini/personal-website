import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg';

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
    Prefer scss syntax\
  `,
  description: 'About page sass skill description',
  id: 'about.skills.sass.description'
});

export const sass: Skill = {
  picture: { src, alt },
  name,
  description,
  confidence: 3
}
