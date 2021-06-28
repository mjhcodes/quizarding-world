import _ from "lodash";
import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Answers from "../components/Game/Answers";
import Container from "../components/Game/Container";
import Home from "../components/Game/Home";
import MobileValueChart from "../components/Game/MobileValueChart";
import Possessions from "../components/Game/Possessions";
import Question from "../components/Game/Question";
import Spells from "../components/Game/Spells";
import TotalPoints from "../components/Game/TotalPoints";
import ValueChart from "../components/Game/ValueChart";
import * as DK from "../redux/dataKeys";
import { GameScreenProps } from "../typings/interface";
import { setGameObject } from "../utils/formUtil";

interface StyleProps {
  isMobile?: boolean;
}

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ isMobile }: StyleProps) => (isMobile ? "100%" : "50%")};
`;

const BottomSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

// functions

function getQuestion(questions: object[]) {
  const i = Math.floor(Math.random() * questions.length);
  return questions[i];
}

/** final component  **/

function GameScreen({
  dispatch,
  isMobile,
  questions,
  current_question,
}: GameScreenProps) {
  useEffect(() => {
    if (_.isEmpty(current_question)) {
      const question = getQuestion(questions);
      setGameObject(dispatch, `${[DK.CURRENT_QUESTION]}`, question);
    }
  });

  const valueChart = isMobile ? <MobileValueChart /> : <ValueChart />;

  return (
    <Container>
      <TopSection>
        <TotalPoints />
        <Possessions />
      </TopSection>
      <MainSection isMobile={isMobile}>
        <Question />
        <Answers />
      </MainSection>
      <BottomSection>
        {valueChart}
        <Spells />
        <Home />
      </BottomSection>
    </Container>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    questions: state.data.questions,
    current_question: state.form.game.current_question,
  }),
  (dispatch) => ({ dispatch })
)(GameScreen);
