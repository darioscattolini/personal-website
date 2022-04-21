import { translate } from "@docusaurus/Translate";
import { SectionHeader } from "../../SectionHeader";

const name = translate({
  message: 'Skills / Tech Stack',
  description: 'About page skills/tech section name',
  id: 'about.skills.name'
});

const title = translate({
  message: 'I know something about this',
  description: 'About page skills/tech section title',
  id: 'about.skills.title'
});

const description = translate({
  message: `\
    Below are technologies I've been using during the last few years with \
    varying degrees of competence, together with more general coding-related \
    skills. Click/tap on any of them to find out more about them.\
  `,
  description: 'About page skills/tech section description',
  id: 'about.skills.description'
});

export const header: SectionHeader = { name, title, description };
