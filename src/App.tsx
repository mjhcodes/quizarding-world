import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import RenderOverlays from "./overlays";
import { fetchData } from "./services/fetchData";
import QWStyle from "./style/QWStyle";
import { AppProps } from "./typings/interface";
import { toggleValue } from "./utils/uiUtil";

function App({
  dispatch,
  background,
  game_screen,
  is_character_selected,
  selected_character,
}: AppProps) {
  window.onresize = () => {
    window.innerWidth < QWStyle.ui.mobileBreakpoint
      ? toggleValue(dispatch, "isMobile", true)
      : toggleValue(dispatch, "isMobile", false);
  };

  useEffect(() => {
    if (window.innerWidth > QWStyle.ui.mobileBreakpoint) {
      toggleValue(dispatch, "isMobile", false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  const house = _.get(selected_character, "house", background);
  const conditionalBackground =
    is_character_selected && game_screen ? house : background;
  const backgroundImage = `url(/images/backgrounds/${conditionalBackground}.png)`;
  return (
    <main style={{ backgroundImage }}>
      <RenderOverlays />
    </main>
  );
}

export default connect(
  (state: any) => ({
    background: state.ui.background,
    game_screen: state.ui.overlayVisibility.game_screen,
    is_character_selected: state.form.character.is_character_selected,
    selected_character: state.form.character.selected_character,
  }),
  (dispatch) => ({ dispatch })
)(App);
