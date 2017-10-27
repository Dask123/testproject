import React, { Component } from 'react';
import {Select} from 'antd';
const Option = Select.Option;

const dict = {
    zones: "область",
    countries: "страну",
    cities:"город"
};

const Filter = ({ items, onFilterChange, type }) => {
    return (
        <div className="filter">
            <Select
                style={{width: '100%'}}
                placeholder={`Выберите ${dict[type]}`}
                onChange={onFilterChange}
            >
                {
                    items.map(item => <Option key={item.id}>{item.name}</Option>)
                }
            </Select>
        </div>
    )
};
export default Filter;