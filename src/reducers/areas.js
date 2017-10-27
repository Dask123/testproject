/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers} from '../actions/areas';

const initialState = {};
export const areasReducer = createReducer({
  [areasActionsHandlers.getCountriesSucceeded]: (state, payload) => {
    return {...state, countries: payload}
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
    return {...state, zones, cities}
  },
  [areasActionsHandlers.getByAreaFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);