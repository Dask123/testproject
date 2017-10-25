/**
 * Created by Пользователь on 10.10.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Home from './components/home/home';
import store from "./store";

const app = document.getElementById("app");
console.log(store.getState())

ReactDOM.render(
      <Provider store={store}>
        <Home/>
      </Provider>, app
);