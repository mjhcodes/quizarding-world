import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { mapHouseToColor } from "../../style/colorMaps";
import QWStyle from "../../style/QWStyle";
import { CharacterWindowProps } from "../../typings/interface";

interface StyleProps {
  is_shuffling?: boolean;
  house?: string;
}

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: ${({ is_shuffling }: StyleProps) =>
    is_shuffling ? "blur(10px)" : "blur(0)"};
`;

const Window = styled.img`
  height: 323.5px;
  width: 250px;
  border: ${({ house }: StyleProps) =>
    `10px solid ${house ? mapHouseToColor[house] : QWStyle.colors.Black()}`};
  border-radius: 20px;
  background-color: ${QWStyle.colors.White()};
`;

function CharacterWindow({
  is_shuffling,
  selected_character,
}: CharacterWindowProps) {
  const first_name = _.get(selected_character, "first_name", "");
  const full_name = _.get(selected_character, "full_name", "");
  const house = _.get(selected_character, "house", "");

  const windowImg = first_name
    ? `/images/characters/${first_name}/avatar.png`
    : `/images/misc/polyjuice.png`;
  const altText = full_name
    ? `Headshot of ${full_name}`
    : "Cauldron of boiling polyjuice";

  return (
    <WindowWrapper is_shuffling={is_shuffling}>
      <Window src={windowImg} alt={altText} house={house} />
    </WindowWrapper>
  );
}

export default connect(
  (state: any) => ({
    characters: state.data.characters,
    is_shuffling: state.form.character.is_shuffling,
    selected_character: state.form.character.selected_character,
  }),
  {}
)(CharacterWindow);
