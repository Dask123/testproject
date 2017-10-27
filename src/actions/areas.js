/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getCountries: createAction('get countries'),
  getByArea: createAction('get by country')
};

export const areasActionsHandlers = {
  getCountriesSucceeded: createAction('successful countries response'),
  getCountriesFailed: createAction('failed countries response'),
  getByAreaSucceeded: createAction('successful by country response'),
  getByAreaFailed: createAction('failed by country response'),
};

export default areasActions;



