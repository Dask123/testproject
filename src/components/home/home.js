/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Layout, Card } from 'antd';
import './home.less';
import BasicVacancy from './BasicVacancy/BasicVacancy';
import mainDataActions from "../../actions/mainData";

const dateTimeFormat = 'YYYY-MM-DD';
const {Header, Footer, Content} = Layout;

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.mainData.length){
      this.setState({
        loading: false
      })
    }
  }

  renderData(){
    console.log(this)
    const {mainData: vacancies} = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="data-wrapper">
            {/*<Card>
             <Filter cities={cities} onCityFilterChange={this.onCityFilterChange}/>
             </Card>*/}
            {
              vacancies.map((vacancy, index)=>(
                <div key={index} className="card-wrap">
                  <BasicVacancy vacancy={vacancy}/>
                </div>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        </Footer>
      </Layout>
    );
  };

  render() {
    return <div>{!this.state.loading?this.renderData():<div>wait</div>}</div>
  };
}

function mapStateToProps(state) {
  return {
    mainData: state.mainDataReducer.data,
    areas: state.areasReducer
  };
}

export default connect(mapStateToProps)(Home);

