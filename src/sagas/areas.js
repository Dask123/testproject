/**
 * Created by Пользователь on 19.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getAreas } from "../api/queries";
import {areasActions, areasActionsHandlers} from "../actions/areas";

function* getByIdHandler(action) {
  try {
    const cities = [];
    const zones = [];
    const response = yield call(getAreas, action.payload);
    if (Array.isArray(response.data)){
      yield put(areasActionsHandlers.getCountriesSucceeded(response.data));
    }else if(Array.isArray(response.data.areas)){
      response.data.areas.forEach(area=>{
        if(area.areas.length){
          zones.push(area);
        }else{
          cities.push(area);
        }
      });
      yield put(areasActionsHandlers.getZonesSucceeded(zones));
      yield put(areasActionsHandlers.getCitiesSucceeded(cities));
    }
  } catch (e) {
    yield put(areasActionsHandlers.getByIdFailed(e.message));
}
}
export function* watchGetByIdHandler() {
  yield takeLatest(areasActions.getById, getByIdHandler);
}