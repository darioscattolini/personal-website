import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg';

const alt = translate({
  message: 'CSS Logo',
  description: 'About page css skill picture alt text',
  id: 'about.skills.css.picture.alt'
});

const name = translate({
  message: 'CSS',
  description: 'About page css skill name',
  id: 'about.skills.css.name'
});

const description = translate({
  message: 'lnoifwn oiwrnoin noigwnoin ngowinoi',
  description: 'About page css skill description',
  id: 'about.skills.css.description'
});

export const css: Skill = {
  picture: { src, alt },
  name,
  description,
  mastery: 'confident'
}
