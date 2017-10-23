/**
 * Created by Пользователь on 22.10.2017.
 */
import { call, put, takeLatest } from "redux-saga/effects";
import { getVacancy } from "../api/queries";
import vacancyActions from "../actions/vacancy";

function* getVacancyHandler(action) {
  try {
    const response = yield call(getVacancy, action.payload);
    yield put(vacancyActions.getVacancySucceeded(response.data));
  } catch (e) {
    yield put(vacancyActions.getVacancyFailed(e.message));
  }
}
export function* watchGetVacancy() {
  yield takeLatest(vacancyActions.getCountries, getVacancyHandler);
}
