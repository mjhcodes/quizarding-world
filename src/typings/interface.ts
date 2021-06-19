// state

export interface OverlayVisibility {
  characterSelection: boolean;
  gameSelection: boolean;
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

// component props

export interface CharacterButtonProps {
  dispatch: any;
  caption: string;
  isShuffling: boolean;
  characters: object[];
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

export interface MenuContainerProps {
  children: any;
  isMobile: boolean;
}
