import React from "react";
import MenuContainer from "../components/MenuContainer";
import MenuButton from "../components/MenuButton";

export default function GameSelection() {
  return (
    <MenuContainer>
      <MenuButton text="FREE PLAY" disabled={false} />
      <MenuButton text="LOGIN" disabled={true} />
      <MenuButton text="SIGN UP" disabled={true} />
    </MenuContainer>
  );
}
