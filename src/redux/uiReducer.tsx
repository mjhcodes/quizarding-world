import { HOGWARTS } from "./dataKeys";

interface InitialState {
  background: string;
}

const initialState: InitialState = {
  background: HOGWARTS,
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
    default:
      return state;
  }
}
