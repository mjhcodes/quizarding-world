import * as DK from "./dataKeys";

interface InitialState {
  [DK.SELECTED_CHARACTER]: object;
}

const initialState: InitialState = {
  [DK.SELECTED_CHARACTER]: {},
};

export default function formReducer(
  state = initialState,
  action: { type: string; name: string; value: object }
) {
  switch (action.type) {
    case DK.SET_OBJECT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
