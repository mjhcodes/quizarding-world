import React, { useEffect } from "react";
import { connect } from "react-redux";
import MenuButton from "../../components/Menus/MenuButton";
import Container from "../../components/Menus/Container";
import * as DK from "../../redux/dataKeys";
import { resetGame } from "../../redux/formActions";
import { toggleOverlay } from "../../redux/uiActions";

function selectFreePlay(dispatch: any) {
  toggleOverlay(dispatch, `${[DK.GAME_SELECTION]}`, false);
  toggleOverlay(dispatch, `${[DK.CHARACTER_SELECTION]}`, true);
}

function GameSelection({ dispatch }: { dispatch: any }) {
  useEffect(() => resetGame(dispatch), [dispatch]);

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
