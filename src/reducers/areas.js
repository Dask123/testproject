/**
 * Created by Пользователь on 19.10.2017.
 */
import { createReducer } from 'redux-act';
import {areasActionsHandlers} from '../actions/areas';

const initialState = {
  areas: {
      countries: [],
      zones: [],
      cities: []
  }
};
let nextState;
export const areasReducer = createReducer({
  [areasActionsHandlers.getByIdSucceeded]: (state, payload) => {
    let { countries, zones, cities} = state.areas;
    if(Array.isArray(payload)){
        payload.forEach(item=>{
            if(!item.parent_id){
                countries.push(item)
            }
        });
    }else if(Array.isArray(Object.keys(payload)) && payload.areas.length){
        cities = [];
        zones = [];
        payload.areas.forEach(item=>{
            if(item.parent_id && item.areas.length){
                zones.push(item);
            }else if(!item.areas.length){
                cities.push(item);
            }
        })
        if(payload.areas.some(area=>area.areas.length) && zones.length){
            cities = [];
        }else if(!zones.length && !cities.length){
            zones = state.areas.zones
        }else if(!payload.areas.some(area=>area.areas.length)){
            zones = state.areas.zones
        }else if(payload.areas.some(area=>area.areas.length) && payload.areas.some(area=>!area.areas.length)){

        }
    }
    nextState = {...state};
    nextState.areas = {...state.areas, zones, cities, countries};
    return nextState
  },
  [areasActionsHandlers.getByIdFailed]: (state, reason) => {
    console.log(reason);
    return {...state}
  },
}, initialState);