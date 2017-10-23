/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getCountries: createAction('get countries'),
  getCountriesSucceeded: createAction('successful countries response'),
  getCountriesFailed: createAction('failed countries response'),
  getByCountry: createAction('get by country'),
  getByCountrySucceeded: createAction('successful by country response'),
  getByCountryFailed: createAction('failed by country response'),
};
export default areasActions;



