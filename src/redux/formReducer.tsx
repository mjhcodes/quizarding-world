import * as DK from "./dataKeys";

interface InitialState {
  isShuffling: boolean;
  [DK.SELECTED_CHARACTER]: object;
}

const initialState: InitialState = {
  isShuffling: false,
  [DK.SELECTED_CHARACTER]: {},
};

export default function formReducer(
  state = initialState,
  action: { type: string; name: string; value: object | boolean }
) {
  switch (action.type) {
    case DK.SET_OBJECT:
    case DK.TOGGLE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
