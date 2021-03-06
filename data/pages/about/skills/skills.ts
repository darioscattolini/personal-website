import { SkillData } from "../../../models";
import { angular } from "./skills/angular";
import { css } from "./skills/css";
import { docusaurus } from './skills/docusaurus';
import { git } from "./skills/git";
import { header } from "./header";
import { html } from "./skills/html";
import { javaScript } from "./skills/javascript";
import { jest } from "./skills/jest";
import { mySql } from './skills/mysql';
import { OOP } from './skills/object-oriented-programming';
import { php } from './skills/php';
import { prestaShop } from "./skills/prestashop";
import { react } from './skills/react';
import { sass } from "./skills/sass";
import { symfony } from './skills/symfony';
import { testing } from './skills/testing';
import { typeScript } from "./skills/typescript";
import { restApis } from './skills/rest-apis';
import { nodeJs } from './skills/node-js';
import { nest } from './skills/nest';

const skills: SkillData[] = [
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
  testing,
  restApis,
  nodeJs,
  nest
];

export const skillsSectionData = { header, skills };
