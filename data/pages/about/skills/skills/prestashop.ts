import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/prestashop.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'PrestaShop Logo',
  description: 'About page prestashop skill picture alt text',
  id: 'about.skills.prestashop.picture.alt'
});

const name = translate({
  message: 'PrestaShop',
  description: 'About page prestashop skill name',
  id: 'about.skills.prestashop.name'
});

const descriptionMd = translate({
  message: `I have one year of freelancing experience maintaining PrestaShop online stores. I've mostly worked with 1.7 versions, performing tasks such as setting up new stores, migrating from version 1.6, customising themes and developing modules with complex front- and back-office features. I'm familiar with 1.7 codebase, including both PHP code and MySQL tables, and know how to extend/override it.`,
  description: 'About page prestashop skill description',
  id: 'about.skills.prestashop.description'
});
const description = new MarkdownContent(descriptionMd);

export const prestaShop: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
