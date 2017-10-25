/**
 * Created by Пользователь on 22.10.2017.
 */
import { createAction } from 'redux-act';

export const vacancyActions = {
  getVacancy: createAction('get vacancy'),
};

export const vacancyActionsHandlers = {
  getVacancySucceeded: createAction('successful response'),
  getVacancyFailed: createAction('failed response')
};

export default vacancyActions;

