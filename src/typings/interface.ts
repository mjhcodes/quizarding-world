// state

export interface OverlayVisibility {
  characterSelection: boolean;
  gameSelection: boolean;
  gameScreen: boolean;
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
  isCharacterSelected: boolean;
  selected_character: object;
}

// props - containers

export interface GameContainerProps {
  children: any;
}

export interface MenusContainerProps {
  children: any;
  isMobile: boolean;
}

// props - components - menus

export interface CharacterButtonProps {
  dispatch: any;
  caption: string;
  isShuffling: boolean;
  characters: object[];
}

export interface CharacterCaptionProps {
  selected_character: object;
}

export interface CharacterSelectionProps {
  isCharacterSelected: boolean;
}

export interface CharacterWindowProps {
  isShuffling: boolean;
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
  characterSelection: boolean;
  selected_character: object;
}
