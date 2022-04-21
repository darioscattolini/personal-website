import { translate } from "@docusaurus/Translate";
import { Skill } from "../../../../models";

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

const description = translate({
  message: `\
    Having worked as a freelancer with the PrestaShop stack I've become \
    acquainted with the basic features of MySQL databases. I know how to set \
    up relational databases for relatively simple apps. I can use basic SQL \
    syntax to perform queries with filters and joins, and to perform \
    migrations between different versions of a database.
    Within the PHP ecosystem I can handle persistence in MySQL databases with \
    Doctrine ORM, and in Node.js apps I do the same with TypeORM.\
  `,
  description: 'About page mysql skill description',
  id: 'about.skills.mysql.description'
});

export const mySql: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
