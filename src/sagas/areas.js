/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import {areasActions, areasActionsHandlers} from "../actions/areas";

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

function* getByCountryHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    yield put(areasActionsHandlers.getByCountrySucceeded(response.data.areas));
  } catch (e) {
    yield put(areasActionsHandlers.getByCountryFailed(e.message));
}
}
export function* watchGetByCountryHandler() {
  yield takeLatest(areasActions.getByCountry, getByCountryHandler);
}