import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';

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

const description = translate({
  message: `\
    I have working knowledge of Git, acquired through management of personal \
    and bootcamp team repositories. I can commit changes sticking to commit \
    message conventions, work on separate branches, solve merge conflicts, and \
    document pull requests.
    I generally use Git alongside GitHub for hosting remote repositories. I \
    prefer to manage repositories through CLI commands, but I ocasionally use \
    my IDE (VSCode) source control features too.\
  `,
  description: 'About page git skill description',
  id: 'about.skills.git.description'
});

export const git: Skill = {
  picture: { src, alt },
  name,
  description,
  confidence: 3
}
