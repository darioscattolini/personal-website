import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const srcLight = 'img/skills/symfony-light.svg';
const srcDark = 'img/skills/symfony-dark.svg';

const alt = translate({
  message: 'Symfony Logo',
  description: 'About page symfony skill picture alt text',
  id: 'about.skills.symfony.picture.alt'
});

const name = translate({
  message: 'Symfony',
  description: 'About page symfony skill name',
  id: 'about.skills.symfony.name'
});

const description = translate({
  message: `\
    While working as a freelancer on PrestaShop online stores I had the chance \
    to work with the Symfony framework (version 3.4, as then required by \
    PrestaShop). 
    While I haven't developed full-scale apps with PHP and Symfony, I've \
    learnt some of the core features of the framework: writing controllers, \
    configuring routes, rendering pages with the Twig template engine, \
    building, processing and validating forms, injecting services with the \
    service container, and connecting to database with Doctrine ORM.\
  `,
  description: 'About page symfony skill description',
  id: 'about.skills.symfony.description'
});

export const symfony: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}
