import React from "react";
import MenuContainer from "../components/MenuContainer";
import MenuButton from "../components/MenuButton";

export default function GameSelection() {
  return (
    <MenuContainer>
      <MenuButton
        disabled={false}
        text="FREE PLAY"
        caption="Random Characters - Progress Not Saved"
      />
      <MenuButton
        disabled={true}
        text="LOGIN"
        caption="Select Characters - Collect Items - Compete for House Cup"
      />
      <MenuButton
        disabled={true}
        text="SIGN UP"
        caption="Create New Account for Free"
      />
    </MenuContainer>
  );
}
