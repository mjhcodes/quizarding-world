import React from "react";
import { connect } from "react-redux";
import * as DK from "./redux/dataKeys";
import "./App.css";

function App({ dispatch, background }: { dispatch: any; background: string }) {
  function setBackground(background: string) {
    dispatch({
      type: "SET_BACKGROUND",
      name: "background",
      value: background,
    });
  }

  const backgroundImage = `url(/images/backgrounds/${background}.png)`;

  return (
    <main style={{ backgroundImage }}>
      <button onClick={() => setBackground(DK.HOGWARTS)}>Hogwarts</button>
      <button onClick={() => setBackground(DK.GRYFFINDOR)}>Gryffindor</button>
      <button onClick={() => setBackground(DK.HUFFLEPUFF)}>Hufflepuff</button>
      <button onClick={() => setBackground(DK.RAVENCLAW)}>Ravenclaw</button>
      <button onClick={() => setBackground(DK.SLYTHERIN)}>Slytherin</button>
    </main>
  );
}

export default connect(
  (state: any) => ({ background: state.ui.background }),
  (dispatch) => ({ dispatch })
)(App);
