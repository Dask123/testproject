/**
 * Created by Пользователь on 22.10.2017.
 */
import { createReducer } from 'redux-act';
import {vacancyActionsHandlers} from '../actions/vacancy';

const initialState = {};
export const vacancyReducer = createReducer({
  [vacancyActionsHandlers.getVacancySucceeded]: (state, payload) => {
    return {...state, data: payload}
  },
  [vacancyActionsHandlers.getVacancyFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  }
}, initialState);
