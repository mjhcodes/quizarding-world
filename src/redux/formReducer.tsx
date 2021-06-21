import * as DK from "./dataKeys";

interface InitialState {
  [DK.IS_CHARACTER_SELECTED]: boolean;
  [DK.IS_SHUFFLING]: boolean;
  [DK.SELECTED_CHARACTER]: object;
}

const initialState: InitialState = {
  [DK.IS_CHARACTER_SELECTED]: false,
  [DK.IS_SHUFFLING]: false,
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
