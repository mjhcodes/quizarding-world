export function setBackground(dispatch: any, value: string) {
  dispatch({
    type: "SET_BACKGROUND",
    name: "background",
    value,
  });
}

export function toggleLoading(dispatch: any, value: boolean) {
  dispatch({
    type: "TOGGLE_LOADING",
    name: "isLoading",
    value,
  });
}
