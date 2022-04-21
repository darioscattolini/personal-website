import { SectionHeader } from "../SectionHeader";
import { angular } from "./data/angular";
import { css } from "./data/css";
import { docusaurus } from './data/docusaurus';
import { git } from "./data/git";
import { header } from "./data/header";
import { html } from "./data/html";
import { javaScript } from "./data/javascript";
import { jest } from "./data/jest";
import { mySql } from './data/mysql';
import { OOP } from './data/object-oriented-programming';
import { php } from './data/php';
import { prestaShop } from "./data/prestashop";
import { react } from './data/react';
import { sass } from "./data/sass";
import { symfony } from './data/symfony';
import { testing } from './data/testing';
import { typeScript } from "./data/typescript";
import { Skill } from "./Skill";

type SkillsData = {
  header: SectionHeader;
  skills: Skill[]
};

const skills: Skill[] = [
  html, 
  css, 
  javaScript, 
  typeScript, 
  angular, 
  prestaShop, 
  jest,
  git,
  sass,
  php,
  symfony,
  mySql,
  docusaurus,
  react,
  OOP,
  testing
];

export const skillsData: SkillsData = { header, skills };
