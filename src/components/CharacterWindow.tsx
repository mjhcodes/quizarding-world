import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { mapHouseToColor } from "../style/colorMaps";
import QWStyle from "../style/QWStyle";
import { CharacterWindowProps, CharacterObject } from "../typings/interface";

interface StyleProps {
  house: string;
}

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Window = styled.img`
  height: 323.5px;
  width: 250px;
  border: ${({ house }: StyleProps) => `10px solid ${mapHouseToColor[house]}`};
  border-radius: 20px;
  background-color: ${QWStyle.colors.White()};
`;

const WindowCaption = styled.h3`
  margin-top: 0.5rem;
  text-align: center;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
`;

function CharacterWindow({ characters }: CharacterWindowProps) {
  const randomNum = Math.floor(Math.random() * characters.length);
  const character: CharacterObject = characters[randomNum];
  const first_name = _.get(character, "first_name", "");
  const full_name = _.get(character, "full_name", "");
  const house = _.get(character, "house", "");

  return (
    <WindowWrapper>
      <Window
        src={`/images/characters/${first_name}/avatar.png`}
        alt={`Headshot of ${full_name}`}
        house={house}
      />
      <WindowCaption>{full_name}</WindowCaption>
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({ characters: state.data.characters }),
  {}
)(CharacterWindow);
