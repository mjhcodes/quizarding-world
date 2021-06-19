import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";
import { CharacterButtonProps, CharacterObject } from "../typings/interface";
import { setObject, toggleValue } from "../utils/formUtil";

// styled components

interface StyleProps {
  isShuffling: boolean;
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 50%;
  background-color: ${QWStyle.colors.Red()};
  box-shadow: 0px 4px 4px 0px ${QWStyle.colors.Black(0.25)};
  cursor: ${({ isShuffling }: StyleProps) =>
    isShuffling ? "not-allowed" : "pointer"};
  font-size: 1.5rem;

  :hover {
    animation: 1.5s linear 0s infinite alternate wobble;
  }

  @keyframes wobble {
    50% {
      transform: rotate(-110deg);
    }

    100% {
      transform: rotate(20deg);
    }
  }

  :focus {
    animation: spin 3s linear 0s;
    box-shadow: 0 0 50px 6px ${QWStyle.colors.Green(0.25)};
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1800deg);
    }
  }
`;

const ButtonCaption = styled.p`
  margin: 0.75rem 0 0;
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 0.02em;
  color: ${QWStyle.colors.Black()};
`;

/** final component  **/

function CharacterButton({
  dispatch,
  caption,
  isShuffling,
  characters,
}: CharacterButtonProps) {
  function selectRandomCharacter() {
    if (isShuffling) return;

    toggleValue(dispatch, "isShuffling", true);
    const shuffle = setInterval(() => {
      const randomNum = Math.floor(Math.random() * characters.length);
      const character: CharacterObject = characters[randomNum];
      setObject(dispatch, "selected_character", character);
    }, 250);

    setTimeout(() => {
      clearInterval(shuffle);
      toggleValue(dispatch, "isShuffling", false);
    }, 3000);
  }

  return (
    <ButtonWrapper>
      <ButtonContainer
        isShuffling={isShuffling}
        onClick={selectRandomCharacter}
      >
        🧪
      </ButtonContainer>
      <ButtonCaption>{caption}</ButtonCaption>
    </ButtonWrapper>
  );
}

export default connect(
  (state: any) => ({
    isShuffling: state.form.isShuffling,
    characters: state.data.characters,
  }),
  (dispatch) => ({ dispatch })
)(CharacterButton);
