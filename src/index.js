/**
 * Created by Пользователь on 10.10.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Home from './components/home/home';
import store from "./store";
import { LocaleProvider } from "antd";
import ruRU from 'antd/lib/locale-provider/ru_RU';

const app = document.getElementById("app");
console.log(store.getState())

ReactDOM.render(
      <Provider store={store}>
        <LocaleProvider locale={ruRU}>
          <Home/>
        </LocaleProvider>
      </Provider>, app
);