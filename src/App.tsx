import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { LoadingIconWithWords } from "./components/LoadingIcons";
import QWStyle from "./style/QWStyle";
import { toggleValue } from "./utils/uiUtil";

interface Props {
  customWidth: string;
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.customWidth};
`;

function App({
  dispatch,
  background,
  isMobile,
}: {
  dispatch: any;
  background: string;
  isMobile: boolean;
}) {
  window.onresize = () => {
    window.innerWidth < QWStyle.ui.mobileBreakpoint
      ? toggleValue(dispatch, "isMobile", true)
      : toggleValue(dispatch, "isMobile", false);
  };

  const backgroundImage = `url(/images/backgrounds/${background}.png)`;
  return (
    <main style={{ backgroundImage }}>
      <LoadingWrapper customWidth={isMobile ? "100%" : "50%"}>
        <LoadingIconWithWords />
      </LoadingWrapper>
    </main>
  );
}

export default connect(
  (state: any) => ({
    background: state.ui.background,
    isLoading: state.ui.isLoading,
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(App);
