import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CharacterButton from "../../components/Menus/CharacterButton";
import CharacterCaption from "../../components/Menus/CharacterCaption";
import CharacterWindow from "../../components/Menus/CharacterWindow";
import MenuContainer from "../../components/Menus/MenuContainer";
import QWStyle from "../../style/QWStyle";
import { CharacterSelectionProps } from "../../typings/interface";
import { getRandomExpression } from "../../utils/util";

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  color: ${QWStyle.colors.Black()};
`;

function CharacterSelection({ isCharacterSelected }: CharacterSelectionProps) {
  const title = isCharacterSelected
    ? getRandomExpression()
    : "POLYJUICE STATION";

  return (
    <MenuContainer>
      <Title>{title}</Title>
      <CharacterWindow />

      {isCharacterSelected ? (
        <CharacterCaption />
      ) : (
        <CharacterButton caption="Click the button above to drink the potion" />
      )}
    </MenuContainer>
  );
}

export default connect(
  (state: any) => ({
    isCharacterSelected: state.form.isCharacterSelected,
  }),
  (dispatch) => ({ dispatch })
)(CharacterSelection);
