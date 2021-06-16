import React from "react";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";

interface Props {
  disabled: boolean;
}

const MenuButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 25px;
  background-color: ${(props: Props) =>
    props.disabled ? `${QWStyle.colors.Red(0.6)}` : `${QWStyle.colors.Red()}`};
  box-shadow: 0px 4px 4px 0px ${QWStyle.colors.Black(0.25)};
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 36px;
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

function MenuButton({ text, disabled }: { text: string; disabled: boolean }) {
  return <MenuButtonContainer disabled={disabled}>{text}</MenuButtonContainer>;
}

export default MenuButton;
