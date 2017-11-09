/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Icon, Modal, Button, Spin } from 'antd';
import './home.less';
import BasicVacancy from '../../components/BasicVacancy/BasicVacancy';
import DetailedVacancy from '../../components/DetailedVacancy/DetailedVacancy';
import Filter from '../../components/Filter/Filter';
import {mainDataActions} from "../../actions/mainData";
import {vacancyActions} from "../../actions/vacancy";
import {areasActions} from "../../actions/areas";

const dateTimeFormat = 'YYYY-MM-DD';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showFilters: false,
      showModal: false
    };
    this.filterParams = {};
    this.renderData = this.renderData.bind(this);
    this.showDetailed = this.showDetailed.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSalaryFilterChange = this.onSalaryFilterChange.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
    this.textFieldChange = this.textFieldChange.bind(this);
  }

  componentDidMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
    areasActions.getById(113);
  }

  componentWillUpdate(nextProps, nextState){
    if(!nextState.showFilters && this.state.showFilters){
      mainDataActions.getMainData(moment().format(dateTimeFormat));
    }
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
    this.filterParams.salary = salary;
    this.getFilteredData();
  };

  textFieldChange(text){
    this.filterParams.text = text;
    this.getFilteredData();
  };

  showFilters(){
    this.setState({
      showFilters: !this.state.showFilters
    });
    this.filterParams = {};
  };


  renderData(){
    const {mainData: vacancies, areas} = this.props;
    return (
    <div className="app">
      <div className="app-header">
        <div className="filters-button">
          <Button style={{background:"#7496b9", border:"#7496b9"}} onClick={this.showFilters}>
            <Icon style={{color: "white", fontSize: "20px"}} type={this.state.showFilters ? "menu-fold" : "menu-unfold"} />
          </Button>
        </div>
        {
          this.state.showFilters &&
          <div className="filter-block">
            <Filter
              items={areas}
              onFilterChange={this.onFilterChange}
              onSalaryFilterChange={this.onSalaryFilterChange}
              textFieldChange={this.textFieldChange}
            />
          </div>
        }
      </div>
      <div className="app-content">

        <div className="app-content__data">
          {
            vacancies.map((vacancy, index)=>(
                <BasicVacancy key={index} vacancy={vacancy} showDetailed={this.showDetailed}/>
            ))
          }
        </div>
      </div>
    </div>
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

