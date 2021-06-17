import * as DK from "./dataKeys";

interface InitialState {
  [DK.CHARACTERS]: object[];
  [DK.QUESTIONS]: object[];
  [DK.SPELLS]: object[];
}

const initialState: InitialState = {
  [DK.CHARACTERS]: [],
  [DK.QUESTIONS]: [],
  [DK.SPELLS]: [],
};

export default function dataReducer(
  state = initialState,
  action: { type: string; name: string; value: object[] }
) {
  switch (action.type) {
    case DK.RESET_DATA:
      return { ...initialState };
    case DK.SET_FULL_DATA:
      return { ...action.value };
    case DK.SET_CATEGORY_DATA:
      return {
        ...state,
        [action.name]: [...action.value],
      };
    default:
      return state;
  }
}
