import {parseSalary} from './helper'

test("Тестироввание метода обработки з/п", () => {
    expect(parseSalary({to: 500, from: 10})).toEqual("от 10 до 500 рублей");
    expect(parseSalary({to: 500, from: null})).toEqual("до 500 рублей");
    expect(parseSalary({to: null, from: 10})).toEqual("от 10 рублей");
    expect(parseSalary({})).toEqual("Договорная");
});