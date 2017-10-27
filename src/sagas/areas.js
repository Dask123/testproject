/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import {areasActions, areasActionsHandlers} from "../actions/areas";
import {mainDataActions, mainDataActionsHandlers} from "../actions/mainData";

function* getByIdHandler(action) {
  try {
    const response = yield call(getAreas, action.payload);
    console.log(response)
    yield put(areasActionsHandlers.getByIdSucceeded(response.data));
    if(action.payload){
      console.log(action.payload)
        yield put(mainDataActionsHandlers.getFilteredData(action.payload));
    }
  } catch (e) {
    yield put(areasActionsHandlers.getByIdFailed(e.message));
}
}
export function* watchGetByIdHandler() {
  yield takeLatest(areasActions.getById, getByIdHandler);
}