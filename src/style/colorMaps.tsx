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
