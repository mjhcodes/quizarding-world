import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CharacterButton from "../../components/Menus/CharacterButton";
import CharacterCaption from "../../components/Menus/CharacterCaption";
import CharacterWindow from "../../components/Menus/CharacterWindow";
import Container from "../../components/Menus/Container";
import QWStyle from "../../style/QWStyle";
import { CharacterSelectionProps } from "../../typings/interface";
import { getRandomExpression } from "../../utils/util";

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  color: ${QWStyle.colors.Black()};
`;

function CharacterSelection({
  is_character_selected,
}: CharacterSelectionProps) {
  const title = is_character_selected
    ? getRandomExpression()
    : "POLYJUICE STATION";

  return (
    <Container>
      <Title>{title}</Title>
      <CharacterWindow />

      {is_character_selected ? (
        <CharacterCaption />
      ) : (
        <CharacterButton caption="Click the button above to drink the potion" />
      )}
    </Container>
  );
}

export default connect(
  (state: any) => ({
    is_character_selected: state.form.is_character_selected,
  }),
  (dispatch) => ({ dispatch })
)(CharacterSelection);
