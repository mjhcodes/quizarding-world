import * as DK from "../redux/dataKeys";

// character

export function setCharacterObject(dispatch: any, name: string, value: object) {
  dispatch({
    type: DK.SET_CHARACTER_OBJECT,
    name,
    value,
  });
}

export function toggleCharacterValue(
  dispatch: any,
  name: string,
  value: boolean
) {
  dispatch({
    type: DK.TOGGLE_CHARACTER_VALUE,
    name,
    value,
  });
}

// game

export function resetGame(dispatch: any) {
  dispatch({
    type: DK.RESET_GAME,
  });
}

export function setGameObject(dispatch: any, name: string, value: object) {
  dispatch({
    type: DK.SET_GAME_OBJECT,
    name,
    value,
  });
}
