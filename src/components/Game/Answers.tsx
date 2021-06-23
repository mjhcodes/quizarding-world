import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { mapColorToAnswer } from "../../style/colorMaps";
import QWStyle from "../../style/QWStyle";
import { AnswersProps } from "../../typings/interface";

interface StyleProps {
  isMobile?: boolean;
  i?: number;
}

const AnswersContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
  margin-top: 1.25rem;
  width: 100%;
`;

const AnswerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  min-height: ${({ isMobile }: StyleProps) => (isMobile ? "100px" : "125px")};
  font-size: ${({ isMobile }: StyleProps) => (isMobile ? "1rem" : "1.25rem")};
  line-height: ${({ isMobile }: StyleProps) =>
    isMobile ? "1.25rem" : "1.5rem"};
  font-family: Lora;
  border-radius: 50px;
  border: 5px solid
    ${({ i }: StyleProps) => (i ? mapColorToAnswer[i] : QWStyle.colors.Black())};
  background-color: ${QWStyle.colors.Grey()};
  box-shadow: 20px 20px 20px 0px ${QWStyle.colors.Black(0.25)};
  cursor: pointer;
  transition: 0.35s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

function Answers({ isMobile, current_question }: AnswersProps) {
  const answers = _.get(current_question, "answers", []);
  return (
    <AnswersContainer>
      {_.map(answers, (answer) => {
        return (
          <AnswerButton key={answer.id} i={answer.id} isMobile={isMobile}>
            {answer.answer}
          </AnswerButton>
        );
      })}
    </AnswersContainer>
  );
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    current_question: state.form.game.current_question,
  }),
  (dispatch) => ({ dispatch })
)(Answers);
