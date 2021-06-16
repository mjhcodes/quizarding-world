import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";

interface Props {
  customWidth: string;
}

const MenuContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.customWidth};
`;

const MenuContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  width: ${(props: Props) => props.customWidth};
  max-width: 600px;
  border-radius: 50px;
  background: linear-gradient(
      180deg,
      ${QWStyle.colors.Grey()} 0%,
      ${QWStyle.colors.White(0)} 100%
    ),
    ${QWStyle.colors.Bronze()};
  box-shadow: 0px 4px 4px ${QWStyle.colors.Black(0.25)};
`;

function MenuContainer({
  children,
  isMobile,
}: {
  children: any;
  isMobile: boolean;
}) {
  return (
    <MenuContainerSection customWidth={isMobile ? "100%" : "50%"}>
      <MenuContainerWrapper customWidth={isMobile ? "90%" : "80%"}>
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
