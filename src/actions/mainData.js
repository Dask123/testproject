/**
 * Created by Пользователь on 22.10.2017.
 */
import { createAction } from 'redux-act';

export const mainDataActions = {
  getMainData: createAction('get main data'),
  getFilteredData: createAction('get filtered data')
};

export const mainDataActionsHandlers = {
  getFilteredDataSucceeded: createAction('successful filtered response'),
  getFilteredDataFailed: createAction('failed filtered response'),
  getMainDataSucceeded: createAction('successful response'),
  getMainDataFailed: createAction('failed response'),
};

export default mainDataActions;
