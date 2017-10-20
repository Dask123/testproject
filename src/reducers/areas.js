/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import areasActions from '../actions/areas';

const initialState = {};
export const areasReducer = createReducer({
  [areasActions.getAreaSucceeded]: (state, payload) => {
    return {...state, areas: payload}
  },
  [areasActions.getAreaFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  }}, initialState);