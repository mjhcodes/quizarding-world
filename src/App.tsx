import _ from "lodash";
import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import RenderOverlays from "./overlays";
import { fetchData } from "./services/fetchData";
import QWStyle from "./style/QWStyle";
import { AppProps } from "./typings/interface";
import { setRemainingQuestions } from "./redux/formActions";
import { toggleValue } from "./utils/uiUtil";
import db from "./db.json";

function getRemainingQuestions(
  dispatch: any,
  questions: object[],
  total_rounds: number
) {
  const remaining_questions: object[] = [];
  const used_question_ids: number[] = [];

  while (remaining_questions.length < total_rounds) {
    const random_id = Math.floor(Math.random() * questions.length);

    if (!_.includes(used_question_ids, random_id)) {
      used_question_ids.push(random_id);
      remaining_questions.push(questions[random_id]);
    }
  }

  setRemainingQuestions(dispatch, remaining_questions);
}

function App({
  dispatch,
  is_character_selected,
  selected_character,
  remaining_questions,
  total_rounds,
  background,
  game_screen,
}: AppProps) {
  const questions = db.questions;

  window.onresize = () => {
    window.innerWidth < QWStyle.ui.mobileBreakpoint
      ? toggleValue(dispatch, "isMobile", true)
      : toggleValue(dispatch, "isMobile", false);
  };

  useEffect(() => {
    if (window.innerWidth > QWStyle.ui.mobileBreakpoint) {
      toggleValue(dispatch, "isMobile", false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData(dispatch);

    if (_.isEmpty(remaining_questions)) {
      getRemainingQuestions(dispatch, questions, total_rounds);
    }
  }, [dispatch]);

  const house = _.get(selected_character, "house", background);
  const conditionalBackground =
    is_character_selected && game_screen ? house : background;
  const backgroundImage = `url(/images/backgrounds/${conditionalBackground}.png)`;
  return (
    <main style={{ backgroundImage }}>
      <RenderOverlays />
    </main>
  );
}

export default connect(
  (state: any) => ({
    is_character_selected: state.form.character.is_character_selected,
    selected_character: state.form.character.selected_character,
    remaining_questions: state.form.game.remaining_questions,
    total_rounds: state.form.game.total_rounds,
    background: state.ui.background,
    game_screen: state.ui.overlayVisibility.game_screen,
  }),
  (dispatch) => ({ dispatch })
)(App);
