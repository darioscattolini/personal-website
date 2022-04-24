import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg';
const srcDark = srcLight;

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

const descriptionMd = translate({
  message: `I can leverage modern CSS capabilities for both pixel-perfect and flexible translations of UI designs. I'm proficient in structural/layout properties of CSS, and can build responsive layouts using Flexbox and CSS Grid. I know how to create effects with animations, transitions, filters and gradients.\n\n I can either write full raw CSS stylesheets, or use CSS preprocessors ([SASS]({sass})) or frameworks ([Bootstrap]({bootstrap})). I'm also acquainted with CSS methodologies such as [BEM]({bem}) and [ITCSS]({itcss}).`,
  description: 'About page css skill description',
  id: 'about.skills.css.description'
}, {
  bem: links.bem,
  bootstrap: links.bootstrap,
  itcss: links.itcss,
  sass: links.sass
});
const description = new MarkdownContent(descriptionMd);

export const css: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
