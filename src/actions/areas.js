/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getById: createAction('get area by id')
};

export const areasActionsHandlers = {
  getByIdSucceeded: createAction('successful by id response'),
  getByIdFailed: createAction('failed by id response'),
};

export default areasActions;



