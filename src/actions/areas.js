/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getById: createAction('get area by id')
};

export const areasActionsHandlers = {
  getCountriesSucceeded: createAction('successful countries response'),
  getByIdFailed: createAction('failed get by id response'),
  getZonesSucceeded: createAction('successful zones response'),
  getCitiesSucceeded: createAction('successful cities response')
};

export default areasActions;



