import * as DK from "./dataKeys";

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

export function setRemainingQuestions(dispatch: any, value: object[]) {
  dispatch({
    type: DK.SET_REMAINING_QUESTIONS,
    value,
  });
}

export function updatePoints(dispatch: any) {
  dispatch({
    type: DK.UPDATE_POINTS,
  });
}

export function updateRounds(dispatch: any) {
  dispatch({
    type: DK.UPDATE_ROUNDS,
  });
}
