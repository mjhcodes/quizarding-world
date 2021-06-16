import * as DK from "../redux/dataKeys";

export function setValue(dispatch: any, name: string, value: string) {
  dispatch({
    type: DK.SET_VALUE,
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
