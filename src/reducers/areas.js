/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers, areasActions} from '../actions/areas';

const initialState = {
  areas: []
};
let nextState;
export const areasReducer = createReducer({
  [areasActionsHandlers.getByIdFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [areasActionsHandlers.getAreasSucceeded]: (state, payload) => {
    nextState = {...state};
    nextState.areas = payload;
    return nextState
  }
}, initialState);