import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { registerReducer } from "./register/register.reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  auth: authReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
