/**
 * Created by Пользователь on 17.10.2017.
 */

import { all } from "redux-saga/effects";
import * as areasSagas from './areas';

export default function* rootSaga() {
  yield all([
    areasSagas.watchGetAreas(),
  ]);
}
