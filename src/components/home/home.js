/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import './home.scss';
import './home.less';
import areasActions from "../../actions/areas";
import {connect} from 'react-redux';

class Home extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    areasActions.getArea(113);
  }

  render() {
    console.log('PROPS',this.props)
      return (
        <h1>Hello world!</h1>
      );
    };
};

function mapStateToProps(state) {
  return {
    test: state.areasReducer
  };
}

export default connect(mapStateToProps)(Home);

