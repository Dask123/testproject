/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import './home.scss';
import './home.less';
import mainDataActions from "../../actions/mainData";
import areasActions from "../../actions/areas";


const dateTimeFormat = 'YYYY-MM-DD';

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
    areasActions.getCountries();
    areasActions.getByCountry(113);
  }

  render() {
      return (
        <h1>Hello world!</h1>
      );
    };
}

function mapStateToProps(state) {
  return {
    mainData: state.mainDataReducer,
    areas: state.areasReducer
  };
}

export default connect(mapStateToProps)(Home);

