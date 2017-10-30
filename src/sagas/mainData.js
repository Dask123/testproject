/**
 * Created by Пользователь on 22.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getMainData, getFilteredDataById } from "../api/queries";
import {mainDataActions, mainDataActionsHandlers} from "../actions/mainData";

function* getMainDataHandler(action) {
  try {
    const response = yield call(getMainData, action.payload);
    yield put(mainDataActionsHandlers.getMainDataSucceeded(response.data.items));
  } catch (e) {
    yield put(mainDataActionsHandlers.getMainDataFailed(e.message));
  }
}
export function* watchGetMainData() {
  yield takeLatest(mainDataActions.getMainData, getMainDataHandler);
}

function* getFilteredDataHandler(action) {
  try {
    const response = yield call(getFilteredDataById, action.payload);
    yield put(mainDataActionsHandlers.getFilteredDataSucceeded(response.data.items));
  } catch (e) {
    yield put(mainDataActionsHandlers.getFilteredDataFailed(e.message));
  }
}
export function* watchGetFilteredData() {
  yield takeLatest(mainDataActions.getFilteredData, getFilteredDataHandler);
}