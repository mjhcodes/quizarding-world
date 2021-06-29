import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as DK from "../../redux/dataKeys";
import { HomeProps } from "../../typings/interface";
import { toggleOverlay } from "../../redux/uiActions";

interface StyleProps {
  isMobile?: boolean;
}

const HomeWrapper = styled.button`
  width: ${({ isMobile }: StyleProps) => (isMobile ? "66px" : "auto")};
  text-align: right;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.35s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

const HomeImg = styled.img`
  width: ${({ isMobile }: StyleProps) => (isMobile ? "60px" : "150px")};
`;

// functions

function returnToHomeScreen(dispatch: any) {
  toggleOverlay(dispatch, `${[DK.GAME_SCREEN]}`, false);
  toggleOverlay(dispatch, `${[DK.GAME_SELECTION]}`, true);
}

/** final component  **/

function Home({ dispatch, isMobile }: HomeProps) {
  return (
    <HomeWrapper
      isMobile={isMobile}
      onClick={() => returnToHomeScreen(dispatch)}
    >
      <HomeImg
        isMobile={isMobile}
        src="/images/misc/home.png"
        alt="Hogwarts Castle"
      />
    </HomeWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(Home);
