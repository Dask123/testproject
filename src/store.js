/**
 * Created by Пользователь on 17.10.2017.
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import { rootReducer } from "./reducers/";
import coreActions from "./actions";
import { assignAll } from 'redux-act';

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

/*if (process.env.NODE_ENV === "development") {*/
  const { logger } = require("redux-logger");
  middlewares.push(logger);
/*}*/

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
assignAll(coreActions, store);

sagaMiddleware.run(rootSaga);

export default store;

