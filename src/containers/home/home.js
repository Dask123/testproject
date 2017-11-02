/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Layout, Modal, Button, Spin } from 'antd';
import './home.less';
import BasicVacancy from '../../components/BasicVacancy/BasicVacancy';
import DetailedVacancy from '../../components/DetailedVacancy/DetailedVacancy';
import Filter from '../../components/Filter/Filter';
import {mainDataActions} from "../../actions/mainData";
import {vacancyActions} from "../../actions/vacancy";
import {areasActions} from "../../actions/areas";

const dateTimeFormat = 'YYYY-MM-DD';
const {Header, Footer, Content} = Layout;

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showFilterBlock: false,
      showModal: false
    };
    this.filterParams = {};
    this.renderData = this.renderData.bind(this);
    this.showDetailed = this.showDetailed.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSalaryFilterChange = this.onSalaryFilterChange.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
  }

  componentWillMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
    areasActions.getById(113);
  }

  closeModal(){
    vacancyActions.clearVacancy()
  };

  showDetailed(id){
    vacancyActions.getVacancy(id);
  };

  getFilteredData(){
    mainDataActions.getFilteredData(this.filterParams);
  }

  onFilterChange(id){
    this.filterParams.area = id;
    this.getFilteredData();
  };

  onSalaryFilterChange(salary){
    console.log('FIRED', salary)
    this.filterParams.salary = salary;
    this.getFilteredData();
  }

  showFilters(){
    this.setState({
      showFilters: !this.state.showFilters
    });
    this.filterParams = {};
  };


  renderData(){
    const {mainData: vacancies, areas} = this.props;
    return (
      <Layout className="layout">
        <Header/>
        <Content style={{ padding: '0 50px' }}>
          <div className="filters-button">
            <Button type="primary" onClick={this.showFilters}>
              Фильтры
            </Button>
          </div>
            {
              this.state.showFilters &&
              <div className="filter-block">
                <Filter items={areas} onFilterChange={this.onFilterChange} onSalaryFilterChange={this.onSalaryFilterChange}/>
              </div>
            }
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
    return (
      <div>
        {!this.props.loading ? this.renderData() : <Spin/>}
        <Modal
          title={this.props.vacancy.name}
          visible={this.props.showModal}
          closable={false}
          footer={<Button onClick={this.closeModal}>Закрыть</Button>}
        >
          {this.props.vacancy.name && <DetailedVacancy vacancy={this.props.vacancy}/>}
        </Modal>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    mainData: state.mainDataReducer.data,
    loading: state.mainDataReducer.loading,
    areas: state.areasReducer.areas,
    vacancy: state.vacancyReducer.data,
    showModal: state.vacancyReducer.showModal
  };
}

export default connect(mapStateToProps)(Home);

