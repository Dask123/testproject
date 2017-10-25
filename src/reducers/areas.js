/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers} from '../actions/areas';

const initialState = {};
export const areasReducer = createReducer({
  [areasActionsHandlers.getCountriesSucceeded]: (state, payload) => {
    return {...state, areas: payload}
  },
  [areasActionsHandlers.getCountriesFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [areasActionsHandlers.getByCountrySucceeded]: (state, payload) => {
    return {...state, areas: payload}
  },
  [areasActionsHandlers.getByCountryFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);