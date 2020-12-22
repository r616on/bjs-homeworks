function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    if (isNaN(+percent)) {
        return "Параметр \"Процент\" содержит неправильное значение <не число>"
    };
    if (isNaN(+contribution)) {
        return "Параметр \"Первоначальный взнос\" содержит неправильное значение <не число>"
    };
    if (isNaN(+amount)) {
        return "Параметр \"Сумма кредита\" содержит неправильное значение <не число>"
    };
    if ((0 > +percent) || (+percent > 100)) {
        return "Параметр \"Неверный процент\" содержит неправильное значение < не меньше 1 и не больше 12 >"
    };
    let paying, s, p, n, sumTotal;
    p = 1 / 12 * percent / 100;

    n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() + 1) - (new Date().getMonth() + 1);
    s = amount - contribution;

    paying = s * (p + p / (Math.pow((1 + p), n) - 1));
    sumTotal = paying * n;
    sumTotal = +sumTotal.toFixed(2);
    console.log(sumTotal);
    return sumTotal


    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    if (!!name) {
        return `Привет, мир! Меня зовут ${name}.`
    } else {
        return `Привет, мир! Меня зовут Аноним.`
    }

    // код для задачи №2 писать здесь
    // return greeting;
}