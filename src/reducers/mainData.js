/**
 * Created by Пользователь on 22.10.2017.
 */
import { createReducer } from 'redux-act';
import {mainDataActionsHandlers} from '../actions/mainData';

const initialState = {
  loading: true,
  error: null,
  data: []
};
export const mainDataReducer = createReducer({
  [mainDataActionsHandlers.getMainDataSucceeded]: (state, payload) => {
    return {...state, data: payload, loading: false}
  },
  [mainDataActionsHandlers.getMainDataFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [mainDataActionsHandlers.getFilteredDataSucceeded]: (state, payload) => {
    return {...state, data: payload, loading: false}
  },
  [mainDataActionsHandlers.getFilteredDataFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);