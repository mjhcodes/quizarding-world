import React from "react";
import { connect } from "react-redux";
import MenuButton from "../../components/Menus/MenuButton";
import Container from "../../components/Menus/Container";
import { toggleOverlay } from "../../utils/uiUtil";

function selectFreePlay(dispatch: any) {
  toggleOverlay(dispatch, "gameSelection", false);
  toggleOverlay(dispatch, "characterSelection", true);
}

function GameSelection({ dispatch }: { dispatch: any }) {
  return (
    <Container>
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
    </Container>
  );
}

export default connect(
  (state: any) => ({}),
  (dispatch) => ({ dispatch })
)(GameSelection);
