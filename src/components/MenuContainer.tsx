import { connect } from "react-redux";
import styled from "styled-components";

interface Props {
  customWidth: string;
}

const MenuContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.customWidth};
`;

function MenuContainer({
  children,
  isMobile,
}: {
  children: any;
  isMobile: boolean;
}) {
  return (
    <MenuContainerWrapper customWidth={isMobile ? "100%" : "50%"}>
      {children}
    </MenuContainerWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(MenuContainer);
