import * as DK from "./dataKeys";
import { FormCharacter, FormGame } from "../typings/interface";

interface InitialState {
  [DK.CHARACTER]: FormCharacter;
  [DK.GAME]: FormGame;
}

const initialState: InitialState = {
  [DK.CHARACTER]: {
    [DK.IS_CHARACTER_SELECTED]: false,
    [DK.IS_SHUFFLING]: false,
    [DK.SELECTED_CHARACTER]: {},
  },
  [DK.GAME]: {
    [DK.TOTAL_POINTS]: 0,
    [DK.CURRENT_ROUND]: 1,
    [DK.CURRENT_QUESTION]: {},
    [DK.USED_QUESTIONS]: [],
    [DK.AVAILABLE_SPELLS]: [],
  },
};

export default function formReducer(
  state = initialState,
  action: { type: string; name: string; value: boolean | number | object }
) {
  switch (action.type) {
    case DK.SET_CHARACTER_OBJECT:
    case DK.TOGGLE_CHARACTER_VALUE:
      return {
        ...state,
        character: {
          ...state.character,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}
