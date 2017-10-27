/**
 * Created by Пользователь on 17.10.2017.
 */
import { all } from "redux-saga/effects";

import * as areasSagas from './areas';
import * as mainDataSagas from './mainData';
import * as vacancySagas from './vacancy'

export default function* rootSaga() {
  yield all([
    areasSagas.watchGetByIdHandler(),
    mainDataSagas.watchGetMainData(),
    mainDataSagas.watchGetFilteredData(),
    vacancySagas.watchGetVacancy()
  ]);
}
