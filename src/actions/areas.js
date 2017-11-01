/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getById: createAction('get area by id')
};

export const areasActionsHandlers = {
  getByIdFailed: createAction('failed get by id response'),
  getAreasSucceeded: createAction('successful areas response')
};

export default areasActions;



