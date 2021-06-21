import * as DK from "./dataKeys";
import { OverlayVisibility } from "../typings/interface";

interface InitialState {
  background: string;
  isLoading: boolean;
  isMobile: boolean;
  overlayVisibility: OverlayVisibility;
}

const initialState: InitialState = {
  background: DK.HOGWARTS,
  isLoading: false,
  isMobile: true,
  overlayVisibility: {
    characterSelection: false,
    gameSelection: true,
    gameScreen: true,
  },
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
    case DK.TOGGLE_OVERLAY:
      return {
        ...state,
        overlayVisibility: {
          ...state.overlayVisibility,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}
