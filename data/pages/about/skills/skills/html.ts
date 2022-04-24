import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg';
const srcDark = srcLight;

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

const descriptionMd = translate({
  message: `HTML is naturally the first front-end technology I've learnt, and therefore the one I'm more experienced with. Having closely studied the [HTML standard]({html}), I'm familiar with the whole range of HTML elements and attributes and their specific semantic significance.\n\n I can use HTML to write entire HTML pages, [Angular]({angular}) or [React]({react}) components, and within [PHP]({php}) code, [Smarty]({smarty}) and [Twig]({twig}) templates.`,
  description: 'About page html skill description',
  id: 'about.skills.html.description'
}, {
  angular: links.angular,
  html: links.html,
  php: links.php,
  react: links.react,
  smarty: links.smarty,
  twig: links.twig
});
const description = new MarkdownContent(descriptionMd);

export const html: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 5
}
