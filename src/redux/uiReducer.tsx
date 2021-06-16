import * as DK from "./dataKeys";

interface InitialState {
  background: string;
  isMobile: boolean;
  isLoading: boolean;
}

const initialState: InitialState = {
  background: DK.HOGWARTS,
  isMobile: true,
  isLoading: false,
};

export default function uiReducer(
  state = initialState,
  action: { type: string; name: string; value: string | boolean }
) {
  switch (action.type) {
    case DK.SET_VALUE:
    case DK.TOGGLE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
