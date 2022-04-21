import { translate } from "@docusaurus/Translate";
import { Skill } from "../../../../models";

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

const description = translate({
  message: `\
    Docusaurus is a React-powered static-site generator, specially designed to \
    build documentation websites. I've built this personal website using \
    Docusarus, and during its development I've learned the basics of component \
    development in React and the syntax of Markdown/MDX.\
  `,
  description: 'About page docusaurus skill description',
  id: 'about.skills.docusaurus.description'
});

export const docusaurus: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
