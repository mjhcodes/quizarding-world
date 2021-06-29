import * as DK from "./dataKeys";

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

export function toggleOverlay(dispatch: any, name: string, value: boolean) {
  dispatch({
    type: DK.TOGGLE_OVERLAY,
    name,
    value,
  });
}
