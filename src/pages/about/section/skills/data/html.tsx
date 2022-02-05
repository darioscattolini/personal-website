import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg';

const alt = translate({
  message: 'HTML Logo',
  description: 'About page html skill picture alt text',
  id: 'about.skills.html.picture.alt'
});

const name = translate({
  message: 'HTML',
  description: 'About page html skill name',
  id: 'about.skills.html.name'
});

const description = translate({
  message: 'lnoifwn oiwrnoin noigwnoin ngowinoi',
  description: 'About page html skill description',
  id: 'about.skills.html.description'
});

export const html: Skill = {
  picture: { src, alt },
  name,
  description
}
