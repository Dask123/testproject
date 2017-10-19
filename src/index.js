/**
 * Created by Пользователь on 10.10.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/home';
import store from "./store";

const state = store.getState();
const app = document.getElementById("app");

ReactDOM.render(<Home/>, app);