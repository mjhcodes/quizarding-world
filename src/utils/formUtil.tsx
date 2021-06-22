import * as DK from "../redux/dataKeys";

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
