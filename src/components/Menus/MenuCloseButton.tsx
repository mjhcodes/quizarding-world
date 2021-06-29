import _ from "lodash";
import { connect } from "react-redux";
import styled from "styled-components";
import * as DK from "../../redux/dataKeys";
import QWStyle from "../../style/QWStyle";
import { MenuCloseButtonProps } from "../../typings/interface";
import { toggleOverlay } from "../../redux/uiActions";

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
  toggleOverlay(dispatch, `${[DK.CHARACTER_SELECTION]}`, false);
  toggleOverlay(dispatch, `${[DK.GAME_SELECTION]}`, true);
}

/** final component  **/

function MenuCloseButton({
  dispatch,
  character_selection,
  selected_character,
}: MenuCloseButtonProps) {
  return character_selection && _.isEmpty(selected_character) ? (
    <CloseButton onClick={() => returnToMenu(dispatch)}>X</CloseButton>
  ) : null;
}

export default connect(
  (state: any) => ({
    character_selection: state.ui.overlayVisibility.character_selection,
    selected_character: state.form.character.selected_character,
  }),
  (dispatch) => ({ dispatch })
)(MenuCloseButton);
