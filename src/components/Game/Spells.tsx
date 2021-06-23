import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../../style/QWStyle";
import { SpellsProps } from "../../typings/interface";
import db from "../../db.json";

interface StyleProps {
  isMobile?: boolean;
}

const SpellsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SpellButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: ${({ isMobile }: StyleProps) => (isMobile ? "0 .25rem" : "0 .75rem")};
  height: ${({ isMobile }: StyleProps) => (isMobile ? "32.5px" : "80px")};
  width: ${({ isMobile }: StyleProps) => (isMobile ? "32.5px" : "80px")};
  border: ${({ isMobile }: StyleProps) => (isMobile ? "2px" : "4px")} solid
    ${QWStyle.colors.White()};
  border-radius: 50%;
  background-color: ${QWStyle.colors.Yellow()};
  box-shadow: 20px 20px 20px 0px ${QWStyle.colors.Black(0.25)};
  text-align: center;
  cursor: pointer;
  transition: 0.35s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

const Wand = styled.img`
  height: ${({ isMobile }: StyleProps) => (isMobile ? "16.25px" : "40px")};
  width: ${({ isMobile }: StyleProps) => (isMobile ? "16.25px" : "40px")};
`;

function Spells({ isMobile, selected_character }: SpellsProps) {
  const first_name = _.get(selected_character, "first_name", "");

  return (
    <SpellsContainer>
      {_.map(db.spells, (spell) => {
        return (
          <SpellButton
            key={spell.id}
            isMobile={isMobile}
            onClick={() => console.log(spell.name)}
          >
            <Wand
              isMobile={isMobile}
              src={`/images/characters/${first_name}/wand.png`}
              alt={`${first_name}'s wand`}
            />
          </SpellButton>
        );
      })}
    </SpellsContainer>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    selected_character: state.form.character.selected_character,
  }),
  (dispatch) => ({ dispatch })
)(Spells);
