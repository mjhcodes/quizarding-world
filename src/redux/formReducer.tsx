import * as DK from "./dataKeys";
import { FormCharacter, FormGame } from "../typings/interface";
import { roundToValueMap } from "../utils/util";

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
    [DK.NEXT_ROUND]: 2,
    [DK.TOTAL_ROUNDS]: 21,
    [DK.CURRENT_QUESTION]: {},
    [DK.REMAINING_QUESTIONS]: [],
    [DK.AVAILABLE_SPELLS]: [],
  },
};

export default function formReducer(
  state = initialState,
  action: { type: string; name: string; value: any }
) {
  switch (action.type) {
    case DK.RESET_GAME:
      return { ...initialState };
    case DK.SET_CHARACTER_OBJECT:
    case DK.TOGGLE_CHARACTER_VALUE:
      return {
        ...state,
        character: {
          ...state.character,
          [action.name]: action.value,
        },
      };
    case DK.SET_GAME_OBJECT:
      return {
        ...state,
        game: {
          ...state.game,
          [action.name]: action.value,
        },
      };
    case DK.SET_REMAINING_QUESTIONS:
      return {
        ...state,
        game: {
          ...state.game,
          [DK.REMAINING_QUESTIONS]: action.value,
        },
      };
    case DK.UPDATE_POINTS:
      return {
        ...state,
        game: {
          ...state.game,
          [DK.TOTAL_POINTS]: roundToValueMap[state.game.current_round],
        },
      };
    case DK.UPDATE_ROUNDS:
      return {
        ...state,
        game: {
          ...state.game,
          [DK.CURRENT_ROUND]: state.game.current_round + 1,
          [DK.NEXT_ROUND]: state.game.next_round + 1,
        },
      };
    default:
      return state;
  }
}
