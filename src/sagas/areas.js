/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import areasActions from "../actions/areas";

function* getAreasHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    yield put(areasActions.getAreaSucceeded(response.data));
  } catch (e) {
    yield put(areasActions.getAreaFailed(e.message));
  }
}
export function* watchGetAreas() {
  yield takeLatest(areasActions.getArea, getAreasHandler);
}