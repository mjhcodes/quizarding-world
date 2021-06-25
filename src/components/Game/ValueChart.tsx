import _ from "lodash";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  mapHouseToColor,
  mapHouseToChartColors,
  mapHouseToChartHighlightColors,
} from "../../style/colorMaps";
import QWStyle from "../../style/QWStyle";
import { ValueChartProps } from "../../typings/interface";
import { convertNumToMillion, roundToValueMap } from "../../utils/util";

interface StyleProps {
  house?: string;
  order?: number;
  total_rounds?: number;
  next_round?: number;
  highlighted?: boolean;
}

const HiddenSpaceHolder = styled.div`
  width: 150px;
`;

const LadderContainer = styled.div<StyleProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 125px;
  height: 80%;
  border-radius: 50px;
  border: 2px solid
    ${({ house }) =>
      house ? mapHouseToChartColors.border[house] : QWStyle.colors.White()};
  background-color: ${({ house }) =>
    house ? mapHouseToColor[house] : "transparent"};
`;

const ValueBlock = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ highlighted }) => (highlighted ? "66.67%" : "95%")};
  height: ${({ total_rounds }) =>
    total_rounds ? 100 / total_rounds + "%" : "4.7619%"};
  font-size: 1.125rem;
  color: ${({ house, highlighted }) =>
    house && !highlighted
      ? mapHouseToChartColors.text[house]
      : QWStyle.colors.Black()};
  background-color: ${({ house, highlighted }) =>
    house && highlighted
      ? mapHouseToChartHighlightColors.background[house]
      : "transparent"};
  border-radius: ${({ highlighted }) => (highlighted ? "50%" : "initial")};
  border-top: 1px solid
    ${({ house }) =>
      house ? mapHouseToChartColors.line[house] : QWStyle.colors.Yellow()};
  border-bottom: 1px solid
    ${({ house, order, next_round }) =>
      house && _.isEqual(order, next_round)
        ? mapHouseToChartHighlightColors.line[house]
        : "transparent"};

  :first-of-type {
    border-top: none;
    margin-top: 10%;
  }
`;

function ValueChart({
  selected_character,
  current_round,
  next_round,
  total_rounds,
}: ValueChartProps) {
  const house = _.get(selected_character, "house", "");

  return (
    <Fragment>
      <HiddenSpaceHolder />
      <LadderContainer house={house}>
        {_.map(Object.values(roundToValueMap).reverse(), (value, i) => {
          const order = total_rounds - i;

          return (
            <ValueBlock
              key={i}
              house={house}
              order={order}
              total_rounds={total_rounds}
              next_round={next_round}
              highlighted={_.isEqual(order, current_round)}
            >
              {convertNumToMillion(value)}
            </ValueBlock>
          );
        })}
      </LadderContainer>
    </Fragment>
  );
}

export default connect(
  (state: any) => ({
    selected_character: state.form.character.selected_character,
    current_round: state.form.game.current_round,
    next_round: state.form.game.next_round,
    total_rounds: state.form.game.total_rounds,
  }),
  (dispatch) => ({ dispatch })
)(ValueChart);
