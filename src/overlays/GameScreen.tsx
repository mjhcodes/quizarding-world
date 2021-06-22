import styled from "styled-components";
import Container from "../components/Game/Container";
import Possessions from "../components/Game/Possessions";
import TotalPoints from "../components/Game/TotalPoints";

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function GameScreen() {
  return (
    <Container>
      <TopSection>
        <TotalPoints />
        <Possessions />
      </TopSection>
      <MainSection>
        <h1>center</h1>
      </MainSection>
      <BottomSection>
        <h1>triangle</h1>
        <h1>wands</h1>
        <h1>home</h1>
      </BottomSection>
    </Container>
  );
}
