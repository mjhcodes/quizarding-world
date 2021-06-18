import * as DK from "../redux/dataKeys";
import QWStyle from "./QWStyle";

export const mapHouseToColor = {
  [DK.GRYFFINDOR]: QWStyle.colors.Red(),
  [DK.HUFFLEPUFF]: QWStyle.colors.Gold(),
  [DK.RAVENCLAW]: QWStyle.colors.Blue(),
  [DK.SLYTHERIN]: QWStyle.colors.Green(),
};
