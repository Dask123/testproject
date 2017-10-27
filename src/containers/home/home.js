/**
 * Created by Пользователь on 10.10.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Layout, Modal, Button } from 'antd';
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
      loading: true,
      showFilterBlock: false,
      kostil: true
    };
    this.showDetailed = this.showDetailed.bind(this);
    this.addFilter = this.addFilter.bind(this);
  }

  componentDidMount(){
    mainDataActions.getMainData(moment().format(dateTimeFormat));
    areasActions.getById();
  };
  componentWillReceiveProps(nextProps){
    if(Array.isArray(nextProps.mainData)){
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
    if(nextProps.areas.zones !== this.props.areas.zones || nextProps.areas.cities !== this.props.areas.cities){
      this.setState({
          kostil: !this.state.kostil
      })
    }
  };

  closeDetailed(){
    vacancyActions.clearVacancy()
  };

  showDetailed(id){
    vacancyActions.getVacancy(id);
  };

  onAreaFilterChanged(area){
    areasActions.getById(area);
  };

  addFilter(){
    this.setState({
      showFilterBlock: !this.state.showFilterBlock
    })
  };

  checkArea(areas){
    const keys = Object.keys(areas);
    const items = keys.map(key=>Array.isArray(areas[key])?key:null);
    return keys.map(key=>{
      if(items.includes(key) && areas[key].length){
        return <Filter key={key} items={areas[key]} onFilterChange={this.onAreaFilterChanged} type={key}/>
      }
    })
  }

  renderData(){
    const {mainData: vacancies, areas} = this.props;
    const {showFilterBlock} = this.state;
    const filters = this.checkArea(areas);

    return (
      <Layout className="layout">
        <Header/>
        <Content style={{ padding: '0 50px' }}>
          <div className="filters-button">
            <Button type="primary" onClick={this.addFilter}>
              Фильтры
            </Button>
          </div>
            {
              showFilterBlock &&
              <div className="filter-block">
                {filters}
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
    return <div>{!this.state.loading?this.renderData():<div>wait</div>}</div>
  };
}

function mapStateToProps(state) {
  return {
    mainData: state.mainDataReducer.data,
    areas: state.areasReducer.areas,
    vacancy: state.vacancyReducer.data,
  };
}

export default connect(mapStateToProps)(Home);

