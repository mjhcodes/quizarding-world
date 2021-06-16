import { connect } from "react-redux";
import styled from "styled-components";
import { LoadingIconWithWords } from "../components/LoadingIcons";

interface Props {
  customWidth: string;
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.customWidth};
`;

function Loading({ isMobile }: { isMobile: boolean }) {
  return (
    <LoadingWrapper customWidth={isMobile ? "100%" : "50%"}>
      <LoadingIconWithWords />
    </LoadingWrapper>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
  }),
  (dispatch) => ({ dispatch })
)(Loading);
