/**
 * Created by Пользователь on 25.10.2017.
 */
import React from 'react';
import { Card } from "antd"
import './BasicVacancy.less';

export const BasicVacancy = ({vacancy, showDetailed}) => {
    return (
        <Card title={vacancy.name} extra={<a onClick={()=>{showDetailed(vacancy.id)}}>Подробнее</a>}>
          <div className="vacancy-wrapper">
            <label>Требования: </label>
            <span className="vacancy-requirment">{vacancy.snippet.requirement}</span>
            <label>Обязанности: </label>
            <span className="vacancy-responsibility">
              <span dangerouslySetInnerHTML={(() => {return {__html: vacancy.snippet.responsibility?vacancy.snippet.responsibility:'Не указано'}})()}/>
            </span>
            <label>Заработная плата: </label>
            <span className="vacancy-salary">
            {vacancy.salary?vacancy.salary.from?`от ${vacancy.salary.from} рублей`:"Договорная":"Договорная"}
            </span>
            <label>Компания: </label>
            <span className="vacancy-company">{`${vacancy.employer.name}, ${vacancy.area.name}`}</span>
          </div>
        </Card>
    )
};
export default BasicVacancy;