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
  message: `\
    HTML is naturally the first front-end technology I've learnt, and \
    therefore the one I'm more experienced with. Having closely studied the \
    HTML standard, I'm familiar with the whole range of HTML elements and \
    attributes and their specific semantic significance.
    I can use HTML to write entire HTML pages, Angular or React components, \
    and within PHP code, Smarty and Twig templates.\
  `,
  description: 'About page html skill description',
  id: 'about.skills.html.description'
});

export const html: Skill = {
  picture: { src, alt },
  name,
  description,
  confidence: 5
}
