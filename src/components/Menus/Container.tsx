import { connect } from "react-redux";
import styled from "styled-components";
import MenuCloseButton from "./MenuCloseButton";
import QWStyle from "../../style/QWStyle";
import { MenusContainerProps } from "../../typings/interface";

// styled components

interface StyleProps {
  isMobile: boolean;
}

const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isMobile }: StyleProps) => (isMobile ? "100%" : "50%")};
`;

const ContainerWrapper = styled.div`
  position: relative;
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

/** final component  **/

function Container({ children, isMobile }: MenusContainerProps) {
  return (
    <ContainerSection isMobile={isMobile}>
      <ContainerWrapper isMobile={isMobile}>
        <MenuCloseButton />
        {children}
      </ContainerWrapper>
    </ContainerSection>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(Container);
