/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Layout, Modal, Spin } from 'antd';
import './home.less';
import BasicVacancy from '../../components/BasicVacancy/BasicVacancy';
import DetailedVacancy from '../DetailedVacancy/DetailedVacancy';
import mainDataActions from "../../actions/mainData";
import {vacancyActions} from "../../actions/vacancy";

const dateTimeFormat = 'YYYY-MM-DD';
const {Header, Footer, Content} = Layout;

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
    this.showDetailed = this.showDetailed.bind(this);
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
    if(nextProps.vacancy.name){
      Modal.info({
        title: nextProps.vacancy.name,
        content: <DetailedVacancy vacancy={nextProps.vacancy}/>,
        onOk: this.closeDetailed(),
        okText: "Закрыть"
      })
    }
  }

  closeDetailed(){
    vacancyActions.clearVacancy()
  }

  showDetailed(id){
    vacancyActions.getVacancy(id);
    if(!this.props.vacancy.name){
      <Spin/>
    }
  };

  renderData(){
    const {mainData: vacancies} = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="data-wrapper">
            {
              vacancies.map((vacancy, index)=>(
                <div key={index} className="card-wrap">
                  <BasicVacancy vacancy={vacancy} showDetailed={this.showDetailed}/>
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
    areas: state.areasReducer,
    vacancy: state.vacancyReducer.data
  };
}

export default connect(mapStateToProps)(Home);

