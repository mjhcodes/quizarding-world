import * as DK from "./dataKeys";
import { FormCharacter, FormGame } from "../typings/interface";

interface InitialState {
  character: FormCharacter;
  game: FormGame;
}

const initialState: InitialState = {
  character: {
    [DK.IS_CHARACTER_SELECTED]: false,
    [DK.IS_SHUFFLING]: false,
    [DK.SELECTED_CHARACTER]: {},
  },
  game: {
    total_points: 0,
    current_question: {},
    used_questions: [],
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
