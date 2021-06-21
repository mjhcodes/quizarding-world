import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { mapHouseToColor } from "../../style/colorMaps";
import QWStyle from "../../style/QWStyle";
import { CharacterCaptionProps } from "../../typings/interface";

interface StyleProps {
  house?: string;
}

const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.p`
  font-family: Lora;
  font-size: 1.25rem;
`;

const CharacterName = styled.h3`
  margin-top: 0.5rem;
  min-height: 2.3125rem;
  text-align: center;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ house }: StyleProps) =>
    house ? mapHouseToColor[house] : QWStyle.colors.Black()};
`;

function CharacterCaption({ selected_character }: CharacterCaptionProps) {
  const full_name = _.get(selected_character, "full_name", "");
  const house = _.get(selected_character, "house", "");

  return (
    <CaptionWrapper>
      <Caption>You've assumed the form of</Caption>
      <CharacterName house={house}>{full_name}</CharacterName>
    </CaptionWrapper>
  );
}

export default connect(
  (state: any) => ({
    selected_character: state.form.selected_character,
  }),
  {}
)(CharacterCaption);
