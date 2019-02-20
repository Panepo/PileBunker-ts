const imageSword = require('../images/type-sword.png');
const imageLance = require('../images/type-lance.png');
const imageHammer = require('../images/type-hammer.png');
const imageFist = require('../images/type-fist.png');
const imageShield = require('../images/type-shield.png');
const imageKunai = require('../images/type-kunai.png');
const imageBow = require('../images/type-bow.png');
const imageXbow = require('../images/type-xbow.png');
const imageArqu = require('../images/type-arqu.png');
const imageCannon = require('../images/type-cannon.png');
const imageDance = require('../images/type-dance.png');
const imageSpell = require('../images/type-spell.png');
const imageStaff = require('../images/type-staff.png');
const imageBell = require('../images/type-bell.png');

export interface ListType {
  cname: string;
  name: string;
  image: any;
  melee: boolean;
  physic: boolean;
  magic: boolean;
}

export const listType: ListType[] = [
  { cname: '刀', name: 'sword', image: imageSword, melee: true, physic: true, magic: false },
  { cname: '槍', name: 'lance', image: imageLance, melee: true, physic: true, magic: false },
  { cname: '槌', name: 'hammer', image: imageHammer, melee: true, physic: true, magic: false },
  { cname: '拳', name: 'fist', image: imageFist, melee: true, physic: true, magic: false },
  { cname: '盾', name: 'shield', image: imageShield, melee: true, physic: true, magic: false },
  { cname: '投剣', name: 'kunai', image: imageKunai, melee: false, physic: true, magic: false },
  { cname: '弓', name: 'bow', image: imageBow, melee: false, physic: true, magic: false },
  { cname: '石弓', name: 'xbow', image: imageXbow, melee: false, physic: true, magic: false },
  { cname: '鉄砲', name: 'arqu', image: imageArqu, melee: false, physic: true, magic: false },
  { cname: '大砲', name: 'cannon', image: imageCannon, melee: false, physic: true, magic: false },
  { cname: '法術', name: 'spell', image: imageSpell, melee: false, physic: false, magic: true },
  { cname: '杖', name: 'staff', image: imageStaff, melee: false, physic: false, magic: true },
  { cname: '歌舞', name: 'dance', image: imageDance, melee: false, physic: false, magic: true },
  { cname: '鈴', name: 'bell', image: imageBell, melee: false, physic: false, magic: true },
];

export interface ListMax {
  cname: string;
  value: number;
}

export const listMax: ListMax[] = [
  { cname: '無巨大化', value: 1 },
  { cname: '巨大化一階', value: 1.16 },
  { cname: '巨大化二階', value: 1.32 },
  { cname: '巨大化三階', value: 1.48 },
  { cname: '巨大化四階', value: 1.64 },
  { cname: '巨大化五階', value: 1.8 },
];

export interface ListRarity {
  cname: string;
  value: number;
  binary: number;
}

export const listRarity: ListRarity[] = [
  { cname: '★1', value: 1, binary: 1},
  { cname: '★2', value: 2, binary: 2},
  { cname: '★3', value: 3, binary: 4},
  { cname: '★4', value: 4, binary: 8},
  { cname: '★5', value: 5, binary: 16},
  { cname: '★6', value: 6, binary: 32},
  { cname: '★7', value: 7, binary: 64},
  { cname: '★8', value: 8, binary: 128},
];

export interface ListTerrain {
  cname: string;
  value: number;
}

export const listTerrain: ListTerrain[] = [
  { cname: '平', value: 1 },
  { cname: '平山', value: 2 },
  { cname: '山', value: 4 },
  { cname: '水', value: 8 },
];

export const listTerrainQuery: string[][] = [
  ['平'],
  ['平山'],
  ['平', '平山'],
  ['山'],
  ['平', '山'],
  ['平山', '山'],
  ['平', '平山', '山'],
  ['水'],
  ['平', '平水', '水'],
  ['平山', '平山水', '水'],
  ['平', '平山', '平水', '平山水', '水'],
  ['山', '山水', '水'],
  ['平', '山', '平水', '山水', '水'],
  ['平山', '山', '平山水', '山水', '水'],
  ['平', '平山', '山', '平水', '平山水', '山水', '水'],
];
