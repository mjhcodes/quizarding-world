import * as DK from "../redux/dataKeys";

// state

export interface OverlayVisibility {
  [DK.CHARACTER_SELECTION]: boolean;
  [DK.GAME_SELECTION]: boolean;
  [DK.GAME_SCREEN]: boolean;
}

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

// props - main app

export interface AppProps {
  dispatch: any;
  background: string;
  gameScreen: boolean;
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

export interface TotalPointsProps {
  isMobile: boolean;
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
