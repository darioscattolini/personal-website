import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'PHP Logo',
  description: 'About page php skill picture alt text',
  id: 'about.skills.php.picture.alt'
});

const name = translate({
  message: 'PHP',
  description: 'About page php skill name',
  id: 'about.skills.php.name'
});

const descriptionMd = translate({
  message: `I've worked with [PHP 7]({php}) doing some freelancing jobs on [PrestaShop]({prestashop}) online stores. I have no experience developing the full extent of a server-side app, but know the basics of object-oriented PHP and can navigate through PHP code base in order to understand how it works and extend it.\n\n Within the PHP ecosystem I've also worked with the [Symfony]({symfony}) framework, with template engines such as [Twig]({twig}) and [Smarty]({smarty}), and with [Doctrine]({doctrine}) ORM.`,
  description: 'About page php skill description',
  id: 'about.skills.php.description'
}, {
  doctrine: links.doctrine,
  php: links.php,
  prestashop: links.prestashop,
  smarty: links.smarty,
  symfony: links.symfony,
  twig: links.twig
});
const description = new MarkdownContent(descriptionMd);

export const php: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
