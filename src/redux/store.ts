import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { loginReducer } from "../modules/pages/Login/reducers/loginReducer";
import { reminderReducer } from "../modules/pages/Reminder/reducers";

const middlewares = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const reducers = combineReducers({
  user: loginReducer,
  reminder: reminderReducer,
});

export const store = createStore(reducers, enhancer);

export type RootState = ReturnType<typeof store.getState>;
