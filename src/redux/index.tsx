import { combineReducers, createStore } from "redux";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
