/**
 * Created by Пользователь on 25.10.2017.
 */
import React from 'react';
import { Button } from "antd"
import {parseSalary, subStr} from '../../helpers/helper';
import './BasicVacancy.less';

export const BasicVacancy = ({vacancy, showDetailed}) => {
    return (
          <div className="vacancy">
            <div className="vacancy-header">
              <div className="vacancy-header__title">
                <h2>{vacancy.name}</h2>
              </div>
              <div className="vacancy-header__salary">
                <h3>{parseSalary(vacancy.salary)}</h3>
              </div>
            </div>
            <div className="vacancy-content">
              <div className="vacancy-content__requirment">
                <label>Требования: </label>
                {subStr(vacancy.snippet.requirement)}
              </div>
              <div className="vacancy-content__responsibility">
                <label>Обязанности: </label>
                <span dangerouslySetInnerHTML={(() => {return {__html: vacancy.snippet.responsibility ? vacancy.snippet.responsibility:'Не указано'}})()}/>
              </div>
              <div className="vacancy-content__company">
                <div className="company-wrap">
                  <label>Компания: </label>
                  {`${vacancy.employer.name}, ${vacancy.area.name}`}
                </div>
              </div>
            </div>
            <div className="vacancy-btn">
              <Button onClick={()=>{showDetailed(vacancy.id)}}>
                Подробнее
              </Button>
            </div>
          </div>
    )
};
export default BasicVacancy;