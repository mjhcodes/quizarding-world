import React from "react";
import { connect } from "react-redux";
import * as DK from "./redux/dataKeys";
import { setBackground, toggleLoading } from "./utils/uiUtil";
import { LoadingIcon, LoadingIconWithWords } from "./components/LoadingIcons";
import "./App.css";

function App({
  dispatch,
  background,
  isLoading,
}: {
  dispatch: any;
  background: string;
  isLoading: boolean;
}) {
  const backgroundImage = `url(/images/backgrounds/${background}.png)`;

  return (
    <main style={{ backgroundImage }}>
      <button onClick={() => setBackground(dispatch, DK.HOGWARTS)}>
        Hogwarts
      </button>
      <button onClick={() => setBackground(dispatch, DK.GRYFFINDOR)}>
        Gryffindor
      </button>
      <button onClick={() => setBackground(dispatch, DK.HUFFLEPUFF)}>
        Hufflepuff
      </button>
      <button onClick={() => setBackground(dispatch, DK.RAVENCLAW)}>
        Ravenclaw
      </button>
      <button onClick={() => setBackground(dispatch, DK.SLYTHERIN)}>
        Slytherin
      </button>
      <br />
      {isLoading ? <LoadingIcon /> : <LoadingIconWithWords />}
      <button onClick={() => toggleLoading(dispatch, true)}>TRUE</button>
      <button onClick={() => toggleLoading(dispatch, false)}>FALSE</button>
    </main>
  );
}

export default connect(
  (state: any) => ({
    background: state.ui.background,
    isLoading: state.ui.isLoading,
  }),
  (dispatch) => ({ dispatch })
)(App);
