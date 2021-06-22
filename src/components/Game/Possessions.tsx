import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { PossessionsProps } from "../../typings/interface";

interface StyleProps {
  isMobile: boolean;
}

const PossessionsWrapper = styled.div`
  display: flex;
`;

const Possession = styled.img`
  margin-left: ${({ isMobile }: StyleProps) => (isMobile ? ".5rem" : "1rem")};
  width: ${({ isMobile }: StyleProps) => (isMobile ? "27.5px" : "55px")};
  height: ${({ isMobile }: StyleProps) => (isMobile ? "33.89px" : "67.75px")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  opacity: 0.5;
`;

function Possessions({ isMobile, selected_character }: PossessionsProps) {
  const house = _.get(selected_character, "house", "");

  return (
    <PossessionsWrapper>
      {_.map([...Array(4)], (possession, i) => {
        return (
          <Possession
            key={`possession_${i + 1}`}
            src={`/images/crests/${house}.png`}
            alt={`Crest of the house ${house}`}
            isMobile={isMobile}
          />
        );
      })}
    </PossessionsWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    selected_character: state.form.character.selected_character,
  }),
  {}
)(Possessions);
