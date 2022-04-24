import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'MySQL Logo',
  description: 'About page mysql skill picture alt text',
  id: 'about.skills.mysql.picture.alt'
});

const name = translate({
  message: 'MySQL',
  description: 'About page mysql skill name',
  id: 'about.skills.mysql.name'
});

const descriptionMd = translate({
  message: `Having worked as a freelancer with the [PrestaShop]({prestashop}) stack I've become acquainted with the basic features of [MySQL]({mysql}) databases. I know how to set up relational databases for relatively simple apps. I can use basic SQL syntax to perform queries with filters and joins, and to perform migrations between different versions of a database.\n\n Within the [PHP]({php}) ecosystem I can handle persistence in MySQL databases with [Doctrine]({doctrine}) ORM, and in [Node.js]({nodejs}) apps I do the same with [TypeORM]({typeorm}).`,
  description: 'About page mysql skill description',
  id: 'about.skills.mysql.description'
}, {
  doctrine: links.doctrine,
  mysql: links.mysql,
  nodejs: links.nodejs,
  php: links.php,
  prestashop: links.prestashop,
  typeorm: links.typeorm
});
const description = new MarkdownContent(descriptionMd);

export const mySql: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
