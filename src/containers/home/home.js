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
      showModal: false,
      filterId: null
    };
    this.renderData = this.renderData.bind(this);
    this.showDetailed = this.showDetailed.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentWillMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
    areasActions.getById();
  }

  closeModal(){
    vacancyActions.clearVacancy()
  };

  showDetailed(id){
    vacancyActions.getVacancy(id);
  };

  onFilterChange(type){
    return (id)=>{
      if(type !== 'cities'){
        areasActions.getById(id);
      }
      if(type !== 'cities'){
        areasActions.clearFilter('cities');
      }else if(type === 'countries'){
        areasActions.clearFilter('zones');
        areasActions.clearFilter('cities');
      }
      this.setState({
        filterId: id
      });
    }
  };

  showFilters(){
    this.setState({
      showFilters: !this.state.showFilters
    })
  };

  setFilter(){
    mainDataActions.getFilteredData(this.state.filterId);
    areasActions.clearFilter('zones');
    areasActions.clearFilter('cities');
  };

  renderData(){
    const {mainData: vacancies, areas, filters} = this.props;
    let userFilters = Object.keys(areas).map(area=> {
      if (filters.includes(area)) {
        console.log('render', area)
        return <Filter items={areas[area]} key={area} onFilterChange={this.onFilterChange(area)} type={area}/>
      }
    });
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
                {userFilters}
                <Button type="primary" onClick={this.setFilter}>Применить</Button>
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
    filters: state.areasReducer.filters,
    vacancy: state.vacancyReducer.data,
    showModal: state.vacancyReducer.showModal
  };
}

export default connect(mapStateToProps)(Home);

