import { connect } from "react-redux";
import CharacterSelection from "./CharacterSelection";
import GameSelection from "./GameSelection";
import Loading from "./Loading";
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

  if (overlayVisibility.gameSelection) {
    return <GameSelection />;
  }

  if (overlayVisibility.characterSelection) {
    return <CharacterSelection />;
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
