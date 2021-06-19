import * as DK from "../redux/dataKeys";

export function setObject(dispatch: any, name: string, value: object) {
  dispatch({
    type: DK.SET_OBJECT,
    name,
    value,
  });
}

export function toggleValue(dispatch: any, name: string, value: boolean) {
  dispatch({
    type: DK.TOGGLE_VALUE,
    name,
    value,
  });
}
