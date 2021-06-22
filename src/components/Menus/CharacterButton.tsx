import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as DK from "../../redux/dataKeys";
import QWStyle from "../../style/QWStyle";
import { CharacterButtonProps, CharacterObject } from "../../typings/interface";
import { setObject, toggleValue } from "../../utils/formUtil";
import { toggleOverlay } from "../../utils/uiUtil";

// styled components

interface StyleProps {
  is_shuffling: boolean;
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  background-color: ${QWStyle.colors.Red()};
  box-shadow: 0px 4px 4px 0px ${QWStyle.colors.Black(0.25)};
  cursor: ${({ is_shuffling }: StyleProps) =>
    is_shuffling ? "not-allowed" : "pointer"};
  font-size: 1.25rem;

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
  width: 75%;
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 0.02em;
  color: ${QWStyle.colors.Black()};
`;

// functions

function sendToGameScreen(dispatch: any) {
  toggleOverlay(dispatch, `${[DK.CHARACTER_SELECTION]}`, false);
  toggleOverlay(dispatch, `${[DK.GAME_SCREEN]}`, true);
}

/** final component  **/

function CharacterButton({
  dispatch,
  caption,
  is_shuffling,
  characters,
}: CharacterButtonProps) {
  function selectRandomCharacter() {
    if (is_shuffling) return;

    toggleValue(dispatch, `${[DK.IS_SHUFFLING]}`, true);
    const shuffle = setInterval(() => {
      const randomNum = Math.floor(Math.random() * characters.length);
      const character: CharacterObject = characters[randomNum];
      setObject(dispatch, `${[DK.SELECTED_CHARACTER]}`, character);
    }, 250);

    setTimeout(() => {
      clearInterval(shuffle);
      toggleValue(dispatch, `${[DK.IS_SHUFFLING]}`, false);
      toggleValue(dispatch, `${[DK.IS_CHARACTER_SELECTED]}`, true);

      setTimeout(() => {
        sendToGameScreen(dispatch);
      }, 3000);
    }, 3000);
  }

  return (
    <ButtonWrapper>
      <ButtonContainer
        is_shuffling={is_shuffling}
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
    is_shuffling: state.form.is_shuffling,
    characters: state.data.characters,
  }),
  (dispatch) => ({ dispatch })
)(CharacterButton);
