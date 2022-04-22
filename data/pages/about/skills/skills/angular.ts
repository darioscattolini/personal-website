import { translate } from "@docusaurus/Translate";
import { SkillData } from "../../../../models";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'Angular Logo',
  description: 'About page angular skill picture alt text',
  id: 'about.skills.angular.picture.alt'
});

const name = translate({
  message: 'Angular',
  description: 'About page angular skill name',
  id: 'about.skills.angular.name'
});

const description = translate({
  message: `\
    I've been using the latest versions of Angular during the last two years, \
    acquiring a competent domain of its central features.
    I can develop smart and presentational components, and know the details of \
    their lifecycle and interaction. I also know how use dependency injection \
    to provide services at different levels of an Angular app. I'm familiar \
    with Angular's modular architecture, its routing system, both reactive and \
    template-driven approaches to forms, and the details of unit testing.
    I can leverage TypeScript and RxJS features for the development of Angular \
    apps, and use well-known UI libraries such as Angular Material and Clarity.\
  `,
  description: 'About page angular skill description',
  id: 'about.skills.angular.description'
});

export const angular: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4
}
