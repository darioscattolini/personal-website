import { translate } from "@docusaurus/Translate";
import { Skill } from "../Skill";

const srcLight = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const srcDark = srcLight;

const alt = translate({
  message: 'React Logo',
  description: 'About page react skill picture alt text',
  id: 'about.skills.react.picture.alt'
});

const name = translate({
  message: 'React',
  description: 'About page react skill name',
  id: 'about.skills.react.name'
});

const description = translate({
  message: `\
    While developing Docusaurus websites I've learnt how to extend React apps \
    with custom components. However, I've never built a fully-fledged React \
    app.\
  `,
  description: 'About page react skill description',
  id: 'about.skills.react.description'
});

export const react: Skill = {
  picture: { srcLight, srcDark, alt },
  name,
  description,
  confidence: 2
}