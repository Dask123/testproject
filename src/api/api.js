/**
 * Created by Пользователь on 17.10.2017.
 */
import axios from "axios";
import headHunter from "../constants/url";

const api = (function () {

  const setResponseInterceptors = function (onSuccess, onError) {
    axios.interceptors.response.use(response => onSuccess(response), error => onError(error));
  };

  const http = {
    get: (...params) => {
      return axios.get(...params);
    },
    post: (...params) => {
      return axios.post(...params);
    }
  };

  return {
    headHunter,
    http,
    setResponseInterceptors
  };

})();

export default api;