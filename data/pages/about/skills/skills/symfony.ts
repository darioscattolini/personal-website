import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/symfony-light.svg';
const srcDark = 'img/skills/symfony-dark.svg';

const alt = translate({
  message: 'Symfony Logo',
  description: 'About page symfony skill picture alt text',
  id: 'about.skills.symfony.picture.alt'
});

const name = translate({
  message: 'Symfony',
  description: 'About page symfony skill name',
  id: 'about.skills.symfony.name'
});

const descriptionMd = translate({
  message: `While working as a freelancer on [PrestaShop]({prestashop}) online stores I had the chance to work with the [Symfony framework]({symfony}) (version 3.4, as then required by PrestaShop).\n\n While I haven't developed full-scale apps with [PHP]({php}) and Symfony, I've learnt some of the core features of the framework: writing controllers, configuring routes, rendering pages with the [Twig]({twig}) template engine, building, processing and validating forms, injecting services with the service container, and connecting to database with [Doctrine ORM]({doctrine}).`,
  description: 'About page symfony skill description',
  id: 'about.skills.symfony.description'
}, {
  doctrine: links.doctrine,
  php: links.php,
  prestashop: links.prestashop,
  symfony: links.symfony,
  twig: links.twig
});
const description = new MarkdownContent(descriptionMd);

export const symfony: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
