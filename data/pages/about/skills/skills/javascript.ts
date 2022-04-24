import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import calcYearsLapse from '@site/src/utilities/calcYearsLapse';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
const srcDark = srcLight;

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

const descriptionMd = translate({
  message: `During the last {jsYears} years I have acquired extensive knowledge of core JavaScript (including features and topics such as asynchronous programming, modules, prototypal inheritance, class syntax, JS engines, event loop...) and browser APIs (such as the DOM, Fetch and Canvas). I've also done some server-side programming with Node.js and Nest.\n\n I'm comfortable using object-oriented patterns and also know the basics of functional programming in JS.\n\n I'm up to date with cutting-edge ECMAScript syntax, and can use it along with transpilers like Babel for browser compatibility. For complex apps I usually prefer the TypeScript superset and frameworks like Angular/Nest. I'm familiar with JS libraries such as RxJS (for async event management) and Leaflet (for displaying interactive maps).`,
  description: 'About page js skill description',
  id: 'about.skills.js.description'
}, {
  jsYears: calcYearsLapse({start: '2019-07-01'}, true)
});
const description = new MarkdownContent(descriptionMd);

export const javaScript: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
