/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import './home.scss';
import './home.less';
import areasActions from "../../actions/areas";

export default class Home extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    areasActions.getArea(113);
  }

  render() {
      return (
        <h1>Hello world!</h1>
      );
    };
};


