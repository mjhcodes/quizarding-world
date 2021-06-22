import { connect } from "react-redux";
import * as DK from "../redux/dataKeys";
import GameScreen from "./GameScreen";
import Loading from "./Loading";
import CharacterSelection from "./Menus/CharacterSelection";
import GameSelection from "./Menus/GameSelection";
import { OverlayVisibility } from "../typings/interface";

function RenderOverlays({
  isLoading,
  overlayVisibility,
}: {
  isLoading: boolean;
  overlayVisibility: OverlayVisibility;
}) {
  if (isLoading) {
    return <Loading />;
  }

  if ("true" === `${overlayVisibility[DK.GAME_SELECTION]}`) {
    return <GameSelection />;
  }

  if ("true" === `${overlayVisibility[DK.CHARACTER_SELECTION]}`) {
    return <CharacterSelection />;
  }

  if ("true" === `${overlayVisibility[DK.GAME_SCREEN]}`) {
    return <GameScreen />;
  }

  return null;
}

export default connect(
  (state: any) => ({
    isLoading: state.ui.isLoading,
    overlayVisibility: state.ui.overlayVisibility,
  }),
  (dispatch) => ({ dispatch })
)(RenderOverlays);
