/**
 * Created by Пользователь on 28.10.2017.
 */
import React, { Component } from 'react';
import {Select, Slider, InputNumber, Input} from 'antd';
const {Option} = Select;
const {Search} = Input;
import './Filter.less';

export default class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
    this.onSalaryFilterChange = this.onSalaryFilterChange.bind(this);
  }


  onSalaryFilterChange(value){
    this.setState({
      value
    });
    this.props.onSalaryFilterChange(value);
  }

  render(){
    const {items, onFilterChange, textFieldChange} = this.props;
    return (
      <div className="filter">
        <label>Фильтр по региону</label>
        <Select
          style={{width: '100%'}}
          placeholder={`Выберите область`}
          onChange={onFilterChange}
        >
          {
            (items || []).map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
          }
        </Select>
        <label>Фильтр по заработной плате</label>
        <div className="filter__salary">
          <Slider
            className="slider"
            onChange={this.onSalaryFilterChange}
            step={5000}
            max={500000}
            value={this.state.value}
          />
          <InputNumber
            step={5000}
            max={500000}
            onChange={this.onSalaryFilterChange}
            value={this.state.value}
          />
        </div>
        <Search placeholder="Ключевые слова" onSearch={textFieldChange} />
      </div>
    )
  }
}
