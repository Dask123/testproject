/**
 * Created by Пользователь on 17.10.2017.
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/";
import rootSaga from "./sagas";

import * as coreReducers from "./reducers/core";

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const registry = new Registry(coreReducers);

const store = createStore(registry.getRootReducer(), {}, applyMiddleware(...middlewares));
registry.store = store;

sagaMiddleware.run(rootSaga);

export default store;
