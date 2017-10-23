/**
 * Created by Пользователь on 22.10.2017.
 */
import { createAction } from 'redux-act';

export const mainDataActions = {
  getMainData: createAction('get main data'),
  getMainDataSucceeded: createAction('successful response'),
  getMainDataFailed: createAction('failed response'),
  getFilteredData: createAction('get filtered data'),
  getFilteredDataSucceeded: createAction('successful filtered response'),
  getFilteredDataFailed: createAction('failed filtered response')
};
export default mainDataActions;
