/**
 * Created by Пользователь on 22.10.2017.
 */
import { createReducer } from 'redux-act';
import {vacancyActionsHandlers, vacancyActions}  from '../actions/vacancy';

const initialState = {
  data: {},
  searchFields:{},
  showModal: false
};
export const vacancyReducer = createReducer({
  [vacancyActionsHandlers.getVacancySucceeded]: (state, payload) => {
    return {...state, data: payload, showModal: true}
  },
  [vacancyActionsHandlers.getVacancyFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [vacancyActions.clearVacancy]: (state) => {
    return {...state, data: {}, showModal: false}
  },
}, initialState);
