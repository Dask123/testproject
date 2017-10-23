/**
 * Created by Пользователь on 22.10.2017.
 */
import { createReducer } from 'redux-act';
import mainDataActions from '../actions/mainData';

const initialState = {};
export const mainDataReducer = createReducer({
  [mainDataActions.getMainDataSucceeded]: (state, payload) => {
    return {...state, data: payload}
  },
  [mainDataActions.getMainDataFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [mainDataActions.getFilteredDataSucceeded]: (state, payload) => {
    return {...state, data: payload}
  },
  [mainDataActions.getFilteredDataFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);