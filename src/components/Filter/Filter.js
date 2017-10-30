/**
 * Created by Пользователь on 28.10.2017.
 */
import React, { Component } from 'react';
import {Select, Button} from 'antd';
const Option = Select.Option;

const dict = {
  countries: "страну",
  zones: "область",
  cities: "город"
}

const Filter = ({ items, onFilterChange, type }) => {
  return (
    <div className="filter">
      <Select
        style={{width: '100%'}}
        placeholder={`Выберите ${dict[type]}`}
        onChange={onFilterChange}
      >
        {
          items.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
        }
      </Select>
    </div>
  )
};
export default Filter;
