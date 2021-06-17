import * as DK from "../redux/dataKeys";

export function resetData(dispatch: any) {
  dispatch({
    type: DK.RESET_DATA,
  });
}

export function setFullData(dispatch: any, value: object) {
  dispatch({
    type: DK.SET_FULL_DATA,
    value,
  });
}

export function setCategoryData(dispatch: any, name: string, value: object[]) {
  dispatch({
    type: DK.SET_CATEGORY_DATA,
    name,
    value,
  });
}
