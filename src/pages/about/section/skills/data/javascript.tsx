import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';

const alt = translate({
  message: 'JavaScript Logo',
  description: 'About page js skill picture alt text',
  id: 'about.skills.js.picture.alt'
});

const name = translate({
  message: 'JavaScript',
  description: 'About page jss skill name',
  id: 'about.skills.js.name'
});

const description = translate({
  message: 'lnoifwn oiwrnoin noigwnoin ngowinoi',
  description: 'About page js skill description',
  id: 'about.skills.js.description'
});

export const javaScript: Skill = {
  picture: { src, alt },
  name,
  description
}
