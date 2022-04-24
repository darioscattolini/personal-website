import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/object-oriented-programming.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Object Oriented Programming Icon',
  description: 'About page OOP skill picture alt text',
  id: 'about.skills.OOP.picture.alt'
});

const name = translate({
  message: 'Object Oriented Programming',
  description: 'About page OOP skill name',
  id: 'about.skills.OOP.name'
});

const descriptionMd = translate({
  message: `Through the development of [Angular]({angular})/[TypeScript]({typescript}) applications and [PrestaShop]({prestashop}) modules with [PHP]({php}) I've familiarized with Object Oriented Programming. I can apply fundamental concepts such as encapsulation, inheritance, composition and polymorphism to handle complex issues by the implementation of simpler single-responsibility classes and different layers of abstraction. I'm also acquainted with standard design patterns.`,
  description: 'About page OOP skill description',
  id: 'about.skills.OOP.description'
}, {
  angular: links.angular,
  php: links.php,
  prestashop: links.prestashop,
  typescript: links.typescript
});
const description = new MarkdownContent(descriptionMd);

export const OOP: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
