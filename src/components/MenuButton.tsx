import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";

interface Props {
  disabled: boolean;
  isMobile: boolean;
}

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2.5rem;
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 25px;
  background-color: ${(props: Props) =>
    props.disabled ? `${QWStyle.colors.Red(0.6)}` : `${QWStyle.colors.Red()}`};
  box-shadow: 0px 4px 4px 0px ${QWStyle.colors.Black(0.25)};
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: ${(props: Props) => (props.isMobile ? "1.25rem" : "1.75rem")};
  font-family: Montserrat;
  color: ${(props: Props) =>
    props.disabled
      ? `${QWStyle.colors.White(0.6)}`
      : `${QWStyle.colors.White()}`};
  letter-spacing: 0.02em;

  :active {
    transform: scale(0.98);
    box-shadow: 4px 2px 22px 4px ${QWStyle.colors.Black(0.25)};
  }
`;

const ButtonCaption = styled.p`
  margin: 0.75rem 0 1rem 0;
  text-align: center;
  font-family: Montserrat;
  letter-spacing: 0.02em;
`;

function MenuButton({
  disabled,
  text,
  caption,
  isMobile,
}: {
  disabled: boolean;
  text: string;
  caption: string;
  isMobile: boolean;
}) {
  return (
    <ButtonWrapper>
      <ButtonContainer disabled={disabled} isMobile={isMobile}>
        {text}
      </ButtonContainer>
      <ButtonCaption>{caption}</ButtonCaption>
    </ButtonWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(MenuButton);
