import { connect } from "react-redux";
import styled from "styled-components";
import { GameContainerProps } from "../../typings/interface";

interface StyleProps {
  isMobile?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ isMobile }: StyleProps) => (isMobile ? "5%" : "2%")};
`;

function Container({ children, isMobile }: GameContainerProps) {
  return <Wrapper isMobile={isMobile}>{children}</Wrapper>;
}

export default connect(
  (state: any) => ({ isMobile: state.ui.isMobile }),
  (dispatch) => ({ dispatch })
)(Container);
