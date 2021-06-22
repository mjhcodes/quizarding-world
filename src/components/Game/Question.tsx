import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QWStyle from "../../style/QWStyle";
import { QuestionProps } from "../../typings/interface";

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 2.5rem;
  width: 100%;
  text-align: center;
  line-height: 1.25rem;
  border-radius: 50px;
  border: 5px solid ${QWStyle.colors.Black()};
  background-color: ${QWStyle.colors.Grey()};
  box-shadow: 20px 20px 20px 0px ${QWStyle.colors.Black(0.25)};
`;

function Question({ current_question }: QuestionProps) {
  const question = _.get(current_question, "question", "");
  return <QuestionWrapper>{question}</QuestionWrapper>;
}

export default connect(
  (state: any) => ({
    current_question: state.form.game.current_question,
  }),
  (dispatch) => ({ dispatch })
)(Question);
