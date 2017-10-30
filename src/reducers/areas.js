/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers, areasActions} from '../actions/areas';

const initialState = {
  areas: {
      countries: [],
      zones: [],
      cities: []
  },
  filters: []
};
let nextState;
export const areasReducer = createReducer({
  [areasActionsHandlers.getCountriesSucceeded]: (state, payload) => {
    nextState = {...state};
    let filters = state.filters;
    if(!filters.includes('countries')){
      filters.push('countries');
    }
    nextState.areas.countries = payload;
    /*nextState.areas.zones = [];
    nextState.areas.cities = [];*/
    nextState.filters = filters;
    return nextState
  },
  [areasActionsHandlers.getByIdFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
  [areasActionsHandlers.getZonesSucceeded]: (state, payload) => {
    nextState = {...state};
    if(payload.length){
      nextState.areas.zones = payload;
      let filters = state.filters;
      if(!filters.includes('zones')){
        filters.push('zones');
      }
      nextState.filters = filters;
    }
    return nextState
  },
  [areasActionsHandlers.getCitiesSucceeded]: (state, payload) => {
    nextState = {...state};
    if(payload.length){
      let filters = state.filters;
      if(!filters.includes('cities')){
        filters.push('cities');
      }
      nextState.areas.cities = payload;
      nextState.filters = filters;
    }
    return nextState
  }
}, initialState);