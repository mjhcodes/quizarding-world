import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import RenderOverlays from "./overlays";
import { fetchData } from "./services/fetchData";
import QWStyle from "./style/QWStyle";
import { toggleValue } from "./utils/uiUtil";

function App({ dispatch, background }: { dispatch: any; background: string }) {
  window.onresize = () => {
    window.innerWidth < QWStyle.ui.mobileBreakpoint
      ? toggleValue(dispatch, "isMobile", true)
      : toggleValue(dispatch, "isMobile", false);
  };

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  const backgroundImage = `url(/images/backgrounds/${background}.png)`;
  return (
    <main style={{ backgroundImage }}>
      <RenderOverlays />
    </main>
  );
}

export default connect(
  (state: any) => ({ background: state.ui.background }),
  (dispatch) => ({ dispatch })
)(App);
