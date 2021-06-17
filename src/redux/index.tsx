import { combineReducers, createStore } from "redux";
import dataReducer from "./dataReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
