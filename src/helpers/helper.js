/**
 * Created by Пользователь on 05.11.2017.
 */
const unsettedSalary = "Договорная";

export function parseSalary(salary){
  let result;
  if(salary){
    if(salary.from && salary.to){
      result = `от ${salary.from} до ${salary.to} рублей`
    }else if(salary.from && !salary.to){
      result = `от ${salary.from} рублей`
    }else if(salary.to && !salary.from){
      result = `до ${salary.to} рублей`
    }else{
      result = unsettedSalary;
    }
  }else{
    result = unsettedSalary;
  }
  return result;
}
