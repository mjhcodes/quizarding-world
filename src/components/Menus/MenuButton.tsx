import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../../style/QWStyle";
import { MenuButtonProps } from "../../typings/interface";

interface StyleProps {
  disabled: boolean;
  isMobile?: boolean;
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
  background-color: ${({ disabled }: StyleProps) =>
    disabled ? `${QWStyle.colors.Red(0.6)}` : `${QWStyle.colors.Red()}`};
  box-shadow: 0px 4px 4px 0px ${QWStyle.colors.Black(0.25)};
  cursor: ${({ disabled }: StyleProps) =>
    disabled ? "not-allowed" : "pointer"};
  font-size: ${({ isMobile }: StyleProps) =>
    isMobile ? "1.25rem" : "1.75rem"};
  font-family: Montserrat;
  color: ${({ disabled }: StyleProps) =>
    disabled ? `${QWStyle.colors.White(0.6)}` : `${QWStyle.colors.White()}`};
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
  color: ${({ disabled }: StyleProps) =>
    disabled ? `${QWStyle.colors.Black(0.6)}` : `${QWStyle.colors.Black()}`};
`;

function MenuButton({
  disabled,
  text,
  caption,
  isMobile,
  onClick,
}: MenuButtonProps) {
  return (
    <ButtonWrapper>
      <ButtonContainer
        disabled={disabled}
        isMobile={isMobile}
        onClick={onClick}
      >
        {text}
      </ButtonContainer>
      <ButtonCaption disabled={disabled}>{caption}</ButtonCaption>
    </ButtonWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(MenuButton);
