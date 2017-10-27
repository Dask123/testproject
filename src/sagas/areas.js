/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import {areasActions, areasActionsHandlers} from "../actions/areas";
import {mainDataActions} from "../actions/mainData";

function* getCountriesHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    yield put(areasActionsHandlers.getCountriesSucceeded(response.data));
  } catch (e) {
    yield put(areasActionsHandlers.getCountriesFailed(e.message));
  }
}
export function* watchGetCountries() {
  yield takeLatest(areasActions.getCountries, getCountriesHandler);
}

function* getByAreaHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    yield put(areasActionsHandlers.getByAreaSucceeded(response.data.areas));
    yield put(mainDataActions.getFilteredData(action.payload));
  } catch (e) {
    yield put(areasActionsHandlers.getByAreaFailed(e.message));
}
}
export function* watchGetByAreaHandler() {
  yield takeLatest(areasActions.getByArea, getByAreaHandler);
}