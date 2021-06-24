import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as DK from "../../redux/dataKeys";
import { mapHouseToColor } from "../../style/colorMaps";
import QWStyle from "../../style/QWStyle";
import { ValueChartProps } from "../../typings/interface";
import { roundToValueMap } from "../../utils/util";

interface StyleProps {
  house?: string;
}

const Triangle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: -2%;
  width: 0;
  height: 0;
  border-left: 33px solid transparent;
  border-right: 33px solid transparent;
  border-bottom: 66px solid
    ${({ house }: StyleProps) =>
      _.isEqual(house, DK.HUFFLEPUFF)
        ? QWStyle.colors.White()
        : QWStyle.colors.Yellow()};

  :after {
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 60px solid
      ${({ house }: StyleProps) =>
        house ? mapHouseToColor[house] : QWStyle.colors.Black()};
    position: absolute;
    top: 4px;
    left: -30px;
  }
`;

const Value = styled.p`
  z-index: 1;
  position: absolute;
  top: 32px;
  font-size: 1.25rem;
  color: ${({ house }: StyleProps) =>
    _.isEqual(house, DK.HUFFLEPUFF)
      ? QWStyle.colors.Black()
      : QWStyle.colors.Yellow()};
`;

function MobileValueChart({
  selected_character,
  current_round,
}: ValueChartProps) {
  const house = _.get(selected_character, "house", "");

  return (
    <Triangle house={house}>
      <Value house={house}>{roundToValueMap[current_round]}</Value>
    </Triangle>
  );
}

export default connect(
  (state: any) => ({
    selected_character: state.form.character.selected_character,
    current_round: state.form.game.current_round,
  }),
  (dispatch) => ({ dispatch })
)(MobileValueChart);
