/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import {areasActions, areasActionsHandlers} from "../actions/areas";

function* getByIdHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    yield put(areasActionsHandlers.getAreasSucceeded(response.data.areas))
    }
    catch (e) {
    yield put(areasActionsHandlers.getByIdFailed(e.message));
}
}
export function* watchGetByIdHandler() {
  yield takeLatest(areasActions.getById, getByIdHandler);
}