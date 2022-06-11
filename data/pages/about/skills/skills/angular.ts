import { translate } from "@docusaurus/Translate";
import { MarkdownContent } from '@site/src/utilities/markdown-content';
import calcYearsLapse from '@site/src/utilities/calcYearsLapse';
import { SkillData } from "../../../../models";
import { links } from '../../../../misc/linksDictionary';

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

const descriptionMd = translate({
  message: `I've been using the latest versions of [Angular]({angularLink}) during the last {angularYears} years, acquiring a competent domain of its central features.\n\n I can develop smart and presentational components, and know the details of their lifecycle and interaction. I also know how use dependency injection to provide services at different levels of an Angular app. I'm familiar with Angular's modular architecture, its routing system, both reactive and template-driven approaches to forms, and the details of unit testing.\n\n I can leverage [TypeScript]({tsLink}) and [RxJS]({rxjsLink}) features for the development of Angular apps, and use well-known UI libraries such as [Angular Material]({angmatLink}) and [Clarity]({clarityLink}).`,
  description: 'About page angular skill description',
  id: 'about.skills.angular.description'
}, {
  angmatLink: links.angularMaterial,
  angularLink: links.angular,
  angularYears: calcYearsLapse({start: '2020-02-01'}, true),
  clarityLink: links.clarity,
  rxjsLink: links.rxjs,
  tsLink: links.typescript
});
const description = new MarkdownContent(descriptionMd);

export const angular: SkillData = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 4,
  selectedDefault: true
}
