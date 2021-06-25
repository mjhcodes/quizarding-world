import * as DK from "../redux/dataKeys";
import QWStyle from "./QWStyle";

export const mapColorToAnswer = {
  1: QWStyle.colors.Red(),
  2: QWStyle.colors.Green(),
  3: QWStyle.colors.Gold(),
  4: QWStyle.colors.Blue(),
};

export const mapHouseToColor = {
  [DK.GRYFFINDOR]: QWStyle.colors.Red(),
  [DK.HUFFLEPUFF]: QWStyle.colors.Gold(),
  [DK.RAVENCLAW]: QWStyle.colors.Blue(),
  [DK.SLYTHERIN]: QWStyle.colors.Green(),
};

export const mapHouseToChartColors = {
  border: {
    [DK.GRYFFINDOR]: QWStyle.colors.White(),
    [DK.HUFFLEPUFF]: QWStyle.colors.Black(),
    [DK.RAVENCLAW]: QWStyle.colors.White(),
    [DK.SLYTHERIN]: QWStyle.colors.White(),
  },
  text: {
    [DK.GRYFFINDOR]: QWStyle.colors.White(),
    [DK.HUFFLEPUFF]: QWStyle.colors.Black(),
    [DK.RAVENCLAW]: QWStyle.colors.White(),
    [DK.SLYTHERIN]: QWStyle.colors.White(),
  },
  line: {
    [DK.GRYFFINDOR]: QWStyle.colors.Yellow(),
    [DK.HUFFLEPUFF]: QWStyle.colors.Black(),
    [DK.RAVENCLAW]: QWStyle.colors.Yellow(),
    [DK.SLYTHERIN]: QWStyle.colors.Yellow(),
  },
};

export const mapHouseToChartHighlightColors = {
  background: {
    [DK.GRYFFINDOR]: QWStyle.colors.Gold(),
    [DK.HUFFLEPUFF]: QWStyle.colors.Grey(),
    [DK.RAVENCLAW]: QWStyle.colors.Gold(),
    [DK.SLYTHERIN]: QWStyle.colors.Gold(),
  },
  line: {
    [DK.GRYFFINDOR]: QWStyle.colors.Gold(),
    [DK.HUFFLEPUFF]: QWStyle.colors.Black(),
    [DK.RAVENCLAW]: QWStyle.colors.Gold(),
    [DK.SLYTHERIN]: QWStyle.colors.Gold(),
  },
};
