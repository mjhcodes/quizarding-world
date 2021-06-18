// state

export interface OverlayVisibility {
  characterSelection: boolean;
  gameSelection: boolean;
}

// data

export interface CharacterObject {
  full_name?: string;
  first_name?: string;
  house?: string;
}

// component props

export interface CharacterButtonProps {
  caption: string;
}

export interface CharacterWindowProps {
  characters: object[];
}

export interface MenuButtonProps {
  disabled: boolean;
  text: string;
  caption: string;
  isMobile: boolean;
  onClick?: any;
}

export interface MenuContainerProps {
  children: any;
  isMobile: boolean;
}
