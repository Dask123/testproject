import React, { Component } from 'react';
import {Select} from 'antd';
const Option = Select.Option;

const dict = {
    zones: "область",
    countries: "страну",
    cities:"город"
};

export default class Filter extends Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.items != this.props.items){
            this.setState({test: true})
        }
    }

    render(){
     const {onFilterChange, items, type} = this.props;
     return(
        <div className="filter">
            <Select
                style={{width: '100%'}}
                placeholder={`Выберите ${dict[type]}`}
                onChange={onFilterChange}
                allowClear={true}
            >
                {
                    items.map(item => <Option key={item.id}>{item.name}</Option>)
                }
            </Select>
        </div>
     )
    }


};