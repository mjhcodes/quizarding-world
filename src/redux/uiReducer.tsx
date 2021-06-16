import { HOGWARTS } from "./dataKeys";

interface InitialState {
  background: string;
  isLoading: boolean;
}

const initialState: InitialState = {
  background: HOGWARTS,
  isLoading: false,
};

export default function uiReducer(
  state = initialState,
  action: { type: string; name: string; value: string }
) {
  switch (action.type) {
    case "SET_BACKGROUND":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
