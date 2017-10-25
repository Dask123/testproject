/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getCountries: createAction('get countries'),
  getByCountry: createAction('get by country')
};

export const areasActionsHandlers = {
  getCountriesSucceeded: createAction('successful countries response'),
  getCountriesFailed: createAction('failed countries response'),
  getByCountrySucceeded: createAction('successful by country response'),
  getByCountryFailed: createAction('failed by country response'),
};

export default areasActions;



