import { combineReducers, createStore } from "redux";
import dataReducer from "./dataReducer";
import formReducer from "./formReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
