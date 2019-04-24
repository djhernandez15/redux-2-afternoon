import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./ducks/budgetReducer";

const rootReducer = combineReducers({
  budget: budgetReducer
});

let store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
export default store;
