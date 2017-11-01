/**
 * Created by Пользователь on 28.10.2017.
 */
import React, { Component } from 'react';
import {Select} from 'antd';
const {Option} = Select;

const Filter = ({ items, onFilterChange }) => {
  return (
    <div className="filter">
      <Select
        style={{width: '100%'}}
        placeholder={`Выберите область`}
        onChange={onFilterChange}
      >
        {
          (items || []).map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
        }
      </Select>
    </div>
  )
};
export default Filter;
