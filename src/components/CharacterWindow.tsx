import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import QWStyle from "../style/QWStyle";
import { CharacterWindowProps, CharacterObject } from "../typings/interface";

interface StyleProps {
  isMobile: boolean;
}

const WindowWrapper = styled.div``;

const Window = styled.img`
  height: ${({ isMobile }: StyleProps) => (isMobile ? "250px" : "300px")};
  width: ${({ isMobile }: StyleProps) => (isMobile ? "250px" : "300px")};
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

function CharacterWindow({ isMobile, characters }: CharacterWindowProps) {
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
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    characters: state.data.characters,
  }),
  {}
)(CharacterWindow);
