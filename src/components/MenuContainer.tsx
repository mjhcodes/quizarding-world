import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";
import { MenuContainerProps } from "../typings/interface";

interface StyleProps {
  isMobile: boolean;
}

const MenuContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isMobile }: StyleProps) => (isMobile ? "100%" : "50%")};
`;

const MenuContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: ${({ isMobile }: StyleProps) =>
    isMobile ? "1rem 3rem" : "2rem 4rem"};
  height: ${({ isMobile }: StyleProps) => (isMobile ? "90vh" : "80vh")};
  width: ${({ isMobile }: StyleProps) => (isMobile ? "90%" : "80%")};
  min-height: 600px;
  max-height: 800px;
  max-width: 400px;
  border-radius: 50px;
  background: linear-gradient(
      180deg,
      ${QWStyle.colors.Grey()} 0%,
      ${QWStyle.colors.White(0)} 100%
    ),
    ${QWStyle.colors.Bronze()};
  box-shadow: 0px 4px 4px ${QWStyle.colors.Black(0.25)};
`;

function MenuContainer({ children, isMobile }: MenuContainerProps) {
  return (
    <MenuContainerSection isMobile={isMobile}>
      <MenuContainerWrapper isMobile={isMobile}>
        {children}
      </MenuContainerWrapper>
    </MenuContainerSection>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(MenuContainer);
