/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers} from '../actions/areas';

const initialState = {
  areas: {}
};
let nextState;
export const areasReducer = createReducer({
  [areasActionsHandlers.getCountriesSucceeded]: (state, payload) => {
    nextState = {...state};
    nextState.areas = {
      countries: payload
    };
    return nextState;
  },
  [areasActionsHandlers.getCountriesFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [areasActionsHandlers.getByAreaSucceeded]: (state, payload) => {
    const zones = [];
    const cities = [];
    payload.forEach(zone=>{
      if(zone.areas.length){
        zones.push(zone);
      }else{
        cities.push(zone);
      }
    });
    nextState = {...state};
    nextState.areas = {...state.areas, zones, cities};
    return nextState
  },
  [areasActionsHandlers.getByAreaFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);