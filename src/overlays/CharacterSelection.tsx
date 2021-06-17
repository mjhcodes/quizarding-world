import React from "react";
import styled from "styled-components";
import CharacterWindow from "../components/CharacterWindow";
import MenuContainer from "../components/MenuContainer";
import QWStyle from "../style/QWStyle";

const Title = styled.h2`
  text-align: center;
  color: ${QWStyle.colors.Black()};
`;

export default function CharacterSelection() {
  return (
    <MenuContainer>
      <Title>POLYJUICE STATION</Title>
      <CharacterWindow />
    </MenuContainer>
  );
}
