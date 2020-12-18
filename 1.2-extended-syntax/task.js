"use strict";

function getResult(a, b, c) {
    let d;
    let x = [];
    d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        x = [];
    } else if (d === 0) {
        x[0] = ((- b) + Math.sqrt(d)) / 2 * a;
    } else if (d > 0) {
        x[0] = ((- b) + Math.sqrt(d)) / 2 * a;
        x[1] = ((- b) - Math.sqrt(d)) / 2 * a;
    };

    return x;
}

function getAverageMark(marks) {
    let averageMark, total;
    if (marks.length === 0) {
        averageMark = 0;
        return averageMark;
    } else if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks.splice(5);
    }
    total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    averageMark = total / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let today = new Date();
    let year = today.getFullYear();
    let fullYear = dateOfBirthday.getFullYear();
    if ((year - fullYear) > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    };


}