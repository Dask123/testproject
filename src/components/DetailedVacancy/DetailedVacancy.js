/**
 * Created by Пользователь on 26.10.2017.
 */
import React, { Component } from 'react';
import moment from 'moment';

const unsettedSalary = "Договорная";

function parseSalary(salary){
  let result;
  if(salary.from && salary.to){
    result = `от ${salary.from} до ${salary.to} рублей`
  }else if(salary.from && !salary.to){
    result = `от ${salary.from} рублей`
  }else if(salary.to && !salary.from){
    result = `до ${salary.to} рублей`
  }else{
    result = unsettedSalary;
  }
  return result;
}

const DetailedVacancy = ({vacancy}) => {
    return (
      <div className="content-wrapper">
        <div dangerouslySetInnerHTML={(() => {return {__html: vacancy.description}})()}/>
        <p><b>Тип занятости:</b>{vacancy.employment.name}</p>
        <p><b>Опыт работы:</b> {vacancy.experience.name}</p>
        <p><b>Заработная плата:</b>{parseSalary(vacancy.salary)}
        </p>
        <p><b>График:</b>{vacancy.schedule.name}</p>
        <p><b>Регион:</b>{vacancy.area.name}</p>
        <p><b>Компания:</b>{vacancy.employer.name}</p>
        <p>
          <b>Ссылка работодателя на HeadHunter:</b>
          <a href={vacancy.employer.alternate_url}>
            {vacancy.employer.alternate_url}
          </a>
        </p>
        <p>
          <b>Дата публикации:</b><br/>
          {moment(vacancy.created_at).format('L')}
        </p>
      </div>
    )
};

export default DetailedVacancy;

