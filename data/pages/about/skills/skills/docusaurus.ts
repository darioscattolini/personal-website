import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { links } from '../../../../misc/linksDictionary';
import { SkillData } from "../../../../models";

const srcLight = 'img/skills/docusaurus.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Docusaurus Logo',
  description: 'About page docusaurus skill picture alt text',
  id: 'about.skills.docusaurus.picture.alt'
});

const name = translate({
  message: 'Docusaurus',
  description: 'About page docusaurus skill name',
  id: 'about.skills.docusaurus.name'
});

const descriptionMd = translate({
  message: `[Docusaurus]({docusaurus}) is a React-powered static-site generator, specially designed to build documentation websites. I've built this personal website using Docusarus, and during its development I've learned the basics of component development in [React]({react}) and the syntax of [Markdown]({markdown})/[MDX]({mdx}).`,
  description: 'About page docusaurus skill description',
  id: 'about.skills.docusaurus.description'
}, {
  docusaurus: links.docusaurus,
  markdown: links.markdown,
  mdx: links.mdx,
  react: links.react
});
const description = new MarkdownContent(descriptionMd);

export const docusaurus: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
