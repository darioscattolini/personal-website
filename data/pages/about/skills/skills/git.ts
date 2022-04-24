import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Git Logo',
  description: 'About page git skill picture alt text',
  id: 'about.skills.git.picture.alt'
});

const name = translate({
  message: 'Git',
  description: 'About page git skill name',
  id: 'about.skills.git.name'
});

const descriptionMd = translate({
  message: `I have working knowledge of Git, acquired through the management of personal and bootcamp team repositories. I can commit changes sticking to commit message conventions, work on separate branches, solve merge conflicts, and document pull requests.\n\n I generally use Git alongside GitHub for hosting remote repositories. I prefer to manage repositories through CLI commands, but I ocasionally use my IDE (VSCode) source control features too.`,
  description: 'About page git skill description',
  id: 'about.skills.git.description'
});
const description = new MarkdownContent(descriptionMd);

export const git: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 3
}
