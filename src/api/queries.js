/**
 * Created by Пользователь on 17.10.2017.
 */
import api from './api';
import headHunter from '../constants/url';

export function getMainData(curDate) {
  return api.http.get(`${headHunter}vacancies/`, {
    params: {
      date_from: curDate
    }
  });
}

export function getAreas(area) {
  return api.http.get(`${headHunter}areas/${area}`);
}

export function getFilteredDataByCity(id) {
  return api.http.get(`${headHunter}vacancies/`,{
    params: {
      area: id
    }
  });
}