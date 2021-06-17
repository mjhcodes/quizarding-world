import React from "react";
import { connect } from "react-redux";
import MenuButton from "../components/MenuButton";
import MenuContainer from "../components/MenuContainer";
import { toggleOverlay } from "../utils/uiUtil";

function selectFreePlay(dispatch: any) {
  toggleOverlay(dispatch, "gameSelection", false);
  toggleOverlay(dispatch, "characterSelection", true);
}

function GameSelection({ dispatch }: { dispatch: any }) {
  return (
    <MenuContainer>
      <MenuButton
        disabled={false}
        text="FREE PLAY"
        caption="Random Characters - Progress Not Saved"
        onClick={() => selectFreePlay(dispatch)}
      />
      <MenuButton
        disabled={true}
        text="LOGIN"
        caption="Coming Soon!"
        // caption="Select Characters - Collect Items - Compete for House Cup"
      />
      <MenuButton
        disabled={true}
        text="SIGN UP"
        caption="Coming Soon!"
        // caption="Create New Account for Free"
      />
    </MenuContainer>
  );
}

export default connect(
  (state: any) => ({}),
  (dispatch) => ({ dispatch })
)(GameSelection);
