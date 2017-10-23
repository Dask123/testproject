/**
 * Created by Пользователь on 22.10.2017.
 */
import { createReducer } from 'redux-act';
import vacancyActions from '../actions/vacancy';

const initialState = {};
export const vacancyReducer = createReducer({
  [vacancyActions.getVacancySucceeded]: (state, payload) => {
    return {...state, data: payload}
  },
  [vacancyActions.getVacancyFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  }
}, initialState);
