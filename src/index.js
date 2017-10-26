/**
 * Created by Пользователь on 10.10.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Home from './containers/home/home';
import store from "./store";
import { LocaleProvider } from "antd";
import ruRU from 'antd/lib/locale-provider/ru_RU';

const app = document.getElementById("app");

ReactDOM.render(

    <LocaleProvider locale={ruRU}>
      <Provider store={store}>
        <Home/>
      </Provider>
    </LocaleProvider>, app
);