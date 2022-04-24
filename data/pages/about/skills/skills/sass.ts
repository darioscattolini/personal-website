import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Sass Logo',
  description: 'About page sass skill picture alt text',
  id: 'about.skills.sass.picture.alt'
});

const name = translate({
  message: 'Sass',
  description: 'About page sass skill name',
  id: 'about.skills.sass.name'
});

const descriptionMd = translate({
  message: `I'm familiar with [Sass preprocessor]({sass}), and especially with the SCSS syntax. I prefer to use it when projects start to scale, for example in [Angular]({sass}) applications, leveraging features such as variables, modules, selector nesting and inheritance, etc.`,
  description: 'About page sass skill description',
  id: 'about.skills.sass.description'
}, {
  angular: links.angular,
  sass: links.sass
});
const description = new MarkdownContent(descriptionMd);

export const sass: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
