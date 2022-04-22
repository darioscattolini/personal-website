import { translate } from '@docusaurus/Translate';
import { SectionHeaderData } from '../../../models';


const name = translate({
  message: 'Experience',
  description: 'About page experience section name',
  id: 'about.experience.name'
});

const title = translate({
  message: 'How did I get here',
  description: 'About page experience section title',
  id: 'about.experience.title'
});

const description = translate({
  message: '',
  description: 'About page experience section description',
  id: 'about.experience.description'
});

export const header: SectionHeaderData = { name, title, description };
