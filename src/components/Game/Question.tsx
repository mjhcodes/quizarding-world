import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../../style/QWStyle";
import { QuestionProps } from "../../typings/interface";

interface StyleProps {
  isMobile?: boolean;
}

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2.5rem;
  width: 100%;
  min-height: 100px;
  text-align: center;
  font-size: ${({ isMobile }: StyleProps) => (isMobile ? "1rem" : "1.25rem")};
  line-height: ${({ isMobile }: StyleProps) =>
    isMobile ? "1.25rem" : "1.5rem"};
  border-radius: 50px;
  border: 5px solid ${QWStyle.colors.Black()};
  background-color: ${QWStyle.colors.Grey()};
  box-shadow: 20px 20px 20px 0px ${QWStyle.colors.Black(0.25)};
`;

function Question({ isMobile, current_question }: QuestionProps) {
  const question = _.get(current_question, "question", "");
  return <QuestionWrapper isMobile={isMobile}>{question}</QuestionWrapper>;
}

export default connect(
  (state: any) => ({
    isMobile: state.ui.isMobile,
    current_question: state.form.game.current_question,
  }),
  (dispatch) => ({ dispatch })
)(Question);
