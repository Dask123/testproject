/**
 * Created by Пользователь on 19.10.2017.
 */
import { combineReducers } from "redux";
import * as coreReducers from "./core";

export function getRootReducer(reducers) {

  return (state, action) => {
    let reducer = combineReducers(reducers);

    return reducer(state, action);
  };

}

export const rootReducer = getRootReducer(coreReducers);
