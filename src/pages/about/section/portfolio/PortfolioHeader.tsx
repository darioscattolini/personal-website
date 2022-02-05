import { translate } from '@docusaurus/Translate';
import { SectionHeader } from '../SectionHeader';

const name = translate({
  message: 'Portfolio',
  description: 'About page portfolio section name',
  id: 'about.portfolio.name'
});

const title = translate({
  message: 'My most relevant projects',
  description: 'About page portfolio section title',
  id: 'about.portfolio.title'
});

const description = translate({
  message: '',
  description: 'About page portfolio section description',
  id: 'about.portfolio.description'
});

export const PortfolioHeader: SectionHeader = { name, title, description };
