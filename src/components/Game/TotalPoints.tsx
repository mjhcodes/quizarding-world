import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../../style/QWStyle";
import { TotalPointsProps } from "../../typings/interface";

interface StyleProps {
  isMobile?: boolean;
}

const PointsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${QWStyle.colors.White()};
`;

const PointsSection = styled.p`
  font-size: ${({ isMobile }: StyleProps) => (isMobile ? "2.25rem" : "4.5rem")};
`;

const PointsCaption = styled.p`
  margin: ${({ isMobile }: StyleProps) =>
    isMobile ? "0 0 .5rem 0.25rem" : "0 0 1rem 0.5rem"};
  font-size: ${({ isMobile }: StyleProps) =>
    isMobile ? ".75rem" : "1.125rem"};
  letter-spacing: 0.02em;
`;

function TotalPoints({ isMobile }: TotalPointsProps) {
  return (
    <PointsWrapper>
      <PointsSection isMobile={isMobile}>0</PointsSection>
      <PointsCaption isMobile={isMobile}>points</PointsCaption>
    </PointsWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(TotalPoints);
