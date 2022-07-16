import { roleTypes, levelTypes, languageTypes, toolTypes } from '../constants';

export type RoleTypes = typeof roleTypes[number];

export type LevelTypes = typeof levelTypes[number];

export type LanguageTypes = typeof languageTypes[number];

export type ToolTypes = typeof toolTypes[number];

export type Filter = RoleTypes | LevelTypes | LanguageTypes | ToolTypes;
