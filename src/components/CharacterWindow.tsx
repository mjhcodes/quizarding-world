import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";
import { toggleOverlay } from "../utils/uiUtil";

function returnToGameSelection(dispatch: any) {
  toggleOverlay(dispatch, "characterSelection", false);
  toggleOverlay(dispatch, "gameSelection", true);
}

interface Props {
  isMobile: boolean;
}

const WindowWrapper = styled.div``;

const Window = styled.img`
  height: ${(props: Props) => (props.isMobile ? "250px" : "300px")};
  width: ${(props: Props) => (props.isMobile ? "250px" : "300px")};
  border: 10px solid ${QWStyle.colors.Red()};
  border-radius: 20px;
  background-color: ${QWStyle.colors.White()};
`;

const WindowCaption = styled.h3`
  margin-top: 0.25rem;
  text-align: center;
  font-family: Lora;
  font-size: 32px;
  font-style: bold;
`;

function CharacterWindow({
  dispatch,
  isMobile,
}: {
  dispatch: any;
  isMobile: boolean;
}) {
  return (
    <WindowWrapper>
      <Window
        isMobile={isMobile}
        src={"/images/characters/harry/avatar.png"}
        alt=""
      />
      <WindowCaption>Harry Potter</WindowCaption>
      <button onClick={() => returnToGameSelection(dispatch)}>BACK</button>
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(CharacterWindow);
