import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import QWStyle from "../style/QWStyle";
import { CharacterWindowProps, CharacterObject } from "../typings/interface";

const WindowWrapper = styled.div``;

const Window = styled.img`
  height: 250px;
  width: 250px;
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

function CharacterWindow({ characters }: CharacterWindowProps) {
  const character: CharacterObject = characters[0];
  const first_name = _.get(character, "first_name", "");
  const full_name = _.get(character, "full_name", "");

  return (
    <WindowWrapper>
      <Window
        src={`/images/characters/${first_name}/avatar.png`}
        alt={`Headshot of ${full_name}`}
      />
      <WindowCaption>{full_name}</WindowCaption>
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({ characters: state.data.characters }),
  {}
)(CharacterWindow);
