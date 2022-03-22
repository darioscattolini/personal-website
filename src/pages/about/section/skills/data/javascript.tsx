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
  message: `\
    During the last three years I have acquired extensive knowledge of core \
    JavaScript (including features and topics such as asynchronous \
    programming, modules, prototypal inheritance, class syntax, JS engines, \
    event loop...) and browser APIs (such as the DOM, Fetch and Canvas). I've \
    also done a bit of server-side programming with Node.js and Express.
    I'm comfortable using object-oriented patterns and also know the basics of \
    functional programming in JS.
    I'm up to date with cutting-edge ECMAScript syntax, and can use it along \
    with transpilers like Babel for browser compatibility. For complex apps I \
    usually prefer the TypeScript superset and frameworks like Angular/React.\
  `,
  description: 'About page js skill description',
  id: 'about.skills.js.description'
});

export const javaScript: Skill = {
  picture: { src, alt },
  name,
  description,
  confidence: 4
}
