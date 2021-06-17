import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import QWStyle from "../style/QWStyle";
import { resetData } from "../utils/dataUtil";
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
  text-transform: capitalize;
`;

interface CharacterObject {
  full_name?: string;
  first_name?: string;
}

function CharacterWindow({
  dispatch,
  isMobile,
  characters,
}: {
  dispatch: any;
  isMobile: boolean;
  characters: object[];
}) {
  const character: CharacterObject = characters[0];
  const first_name = _.get(character, "first_name", "");
  const full_name = _.get(character, "full_name", "");

  return (
    <WindowWrapper>
      <Window
        isMobile={isMobile}
        src={`/images/characters/${first_name}/avatar.png`}
        alt=""
      />
      <WindowCaption>{full_name}</WindowCaption>
      <button onClick={() => returnToGameSelection(dispatch)}>BACK</button>
      <button onClick={() => resetData(dispatch)}>RESET</button>
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    characters: state.data.characters,
  }),
  (dispatch) => ({ dispatch })
)(CharacterWindow);
