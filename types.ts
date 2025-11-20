
import { LucideIcon } from "lucide-react";

export enum SlideType {
  COVER = 'COVER',
  TOC = 'TOC',
  TEXT_LIST = 'TEXT_LIST',
  GRID_CARDS = 'GRID_CARDS',
  CHARACTER = 'CHARACTER',
  TIMELINE = 'TIMELINE',
  SUMMARY = 'SUMMARY'
}

export interface CharacterData {
  id: string;
  name: string;
  role: string;
  worldRole: string; // e.g. Chief Structural Officer
  title: string;
  quote: string;
  keywords: string[];
  bio: string; // Detailed background
  skinIssues: string; // Specific skin problems
  skills: string; // Special abilities
  products: string[];
  color: string;
  image?: string; // Path to image
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[];
  data?: any;
}

export interface NavItem {
  id: number;
  label: string;
}
