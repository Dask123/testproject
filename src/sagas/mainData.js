/**
 * Created by Пользователь on 22.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getMainData, getFilteredDataByCity } from "../api/queries";
import mainDataActions from "../actions/mainData";

function* getMainDataHandler(action) {
  try {
    const response = yield call(getMainData, action.payload);
    yield put(mainDataActions.getMainDataSucceeded(response.data.items));
  } catch (e) {
    yield put(mainDataActions.getMainDataFailed(e.message));
  }
}
export function* watchGetMainData() {
  yield takeLatest(mainDataActions.getMainData, getMainDataHandler);
}

function* getFilteredDataHandler(action) {
  try {
    const response = yield call(getFilteredDataByCity, action.payload);
    yield put(mainDataActions.getFilteredDataSucceeded(response.data.items));
  } catch (e) {
    yield put(mainDataActions.getFilteredDataFailed(e.message));
  }
}
export function* watchGetFilteredData() {
  yield takeLatest(mainDataActions.getFilteredData, getFilteredDataHandler);
}