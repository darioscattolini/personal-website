import { ExperienceLandmark } from '../../../models';
import { header } from './header';
import { conicet } from './landmarks/conicet';
import { itAcademy } from './landmarks/it-academy';
import { majorelModerator } from './landmarks/majorel-moderator';
import { majorelQA } from './landmarks/majorel-qa';
import { philosophy } from './landmarks/philosophy';

const landmarks: ExperienceLandmark[] = [
  majorelQA,
  majorelModerator,
  itAcademy,
  conicet,
  philosophy
];

export const experienceSectionData = { header, landmarks };
