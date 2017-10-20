/**
 * Created by Пользователь on 19.10.2017.
 */
import { createAction } from 'redux-act';

export const areasActions = {
  getArea: createAction('get areas by country'),
  getAreaSucceeded: createAction('successful response'),
  getAreaFailed: createAction('failed response')
};
export default areasActions;



