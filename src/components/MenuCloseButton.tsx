import _ from "lodash";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";
import { MenuCloseButtonProps } from "../typings/interface";
import { toggleOverlay } from "../utils/uiUtil";

const CloseButton = styled.button`
  position: absolute;
  top: -2.5px;
  right: -2.5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid ${QWStyle.colors.White()};
  color: ${QWStyle.colors.White()};
  background-color: ${QWStyle.colors.Red()};
  cursor: pointer;
`;

// functions

function returnToMenu(dispatch: any) {
  toggleOverlay(dispatch, "characterSelection", false);
  toggleOverlay(dispatch, "gameSelection", true);
}

/** final component  **/

function MenuCloseButton({
  dispatch,
  characterSelection,
  selected_character,
}: MenuCloseButtonProps) {
  return characterSelection && _.isEmpty(selected_character) ? (
    <CloseButton onClick={() => returnToMenu(dispatch)}>X</CloseButton>
  ) : null;
}

export default connect(
  (state: any) => ({
    characterSelection: state.ui.overlayVisibility.characterSelection,
    selected_character: state.form.selected_character,
  }),
  (dispatch) => ({ dispatch })
)(MenuCloseButton);
