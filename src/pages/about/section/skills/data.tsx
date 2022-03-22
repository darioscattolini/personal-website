import { SectionHeader } from "../SectionHeader";
import { angular } from "./data/angular";
import { css } from "./data/css";
import { header } from "./data/header";
import { html } from "./data/html";
import { javaScript } from "./data/javascript";
import { typeScript } from "./data/typescript";
import { Skill } from "./Skill";

type SkillsData = {
  header: SectionHeader;
  skills: Skill[]
};

const skills: Skill[] = [
  html, css, javaScript, typeScript, angular
];

export const skillsData: SkillsData = { header, skills };
