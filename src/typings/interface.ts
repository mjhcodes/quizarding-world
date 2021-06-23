import * as DK from "../redux/dataKeys";

// data

export interface CharacterObject {
  id?: number;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  house?: string;
  img?: string;
  wand?: object;
  possessions?: object[];
}

// form

export interface FormCharacter {
  [DK.IS_CHARACTER_SELECTED]: boolean;
  [DK.IS_SHUFFLING]: boolean;
  [DK.SELECTED_CHARACTER]: object;
}

export interface FormGame {
  [DK.TOTAL_POINTS]: number;
  [DK.CURRENT_ROUND]: number;
  [DK.CURRENT_QUESTION]: object;
  [DK.USED_QUESTIONS]: object[];
  [DK.AVAILABLE_SPELLS]: object[];
}

// ui

export interface OverlayVisibility {
  [DK.CHARACTER_SELECTION]: boolean;
  [DK.GAME_SELECTION]: boolean;
  [DK.GAME_SCREEN]: boolean;
}

// props - main app

export interface AppProps {
  dispatch: any;
  background: string;
  [DK.GAME_SCREEN]: boolean;
  [DK.IS_CHARACTER_SELECTED]: boolean;
  selected_character: object;
}

// props - containers

export interface GameContainerProps {
  children: any;
  isMobile: boolean;
}

export interface MenusContainerProps {
  children: any;
  isMobile: boolean;
}

// props - components - game

export interface AnswersProps {
  isMobile: boolean;
  current_question: object;
}

export interface GameScreenProps {
  dispatch: any;
  isMobile: boolean;
  questions: object[];
}

export interface PossessionsProps {
  isMobile: boolean;
  selected_character: object;
}

export interface QuestionProps {
  isMobile: boolean;
  current_question: object;
}

export interface TotalPointsProps {
  isMobile: boolean;
  [DK.TOTAL_POINTS]: number;
}

// props - components - menus

export interface CharacterButtonProps {
  dispatch: any;
  caption: string;
  [DK.IS_SHUFFLING]: boolean;
  characters: object[];
}

export interface CharacterCaptionProps {
  selected_character: object;
}

export interface CharacterSelectionProps {
  [DK.IS_CHARACTER_SELECTED]: boolean;
}

export interface CharacterWindowProps {
  [DK.IS_SHUFFLING]: boolean;
  selected_character: object;
}

export interface MenuButtonProps {
  disabled: boolean;
  text: string;
  caption: string;
  isMobile: boolean;
  onClick?: any;
}

export interface MenuCloseButtonProps {
  dispatch: any;
  [DK.CHARACTER_SELECTION]: boolean;
  selected_character: object;
}
