import { SectionHeader } from "../SectionHeader";
import { css } from "./data/css";
import { header } from "./data/header";
import { html } from "./data/html";
import { javaScript } from "./data/javascript";
import { Skill } from "./Skill";

type SkillsData = {
  header: SectionHeader;
  skills: Skill[]
};

const skills: Skill[] = [
  html, css, javaScript
];

export const skillsData: SkillsData = { header, skills };
