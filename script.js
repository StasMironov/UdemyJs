var money, time, qu1, qu2;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
qu1 = prompt("Введите обязательную статью расходов в этом месяце");
qu2 = prompt("Во сколько обойдется?");

alert('Бюджет на 1 день: ' + Math.floor(money/30) + ' руб');

var appData = {
    budget : money,
    timeData : time,
    expenses : {

    },
    optionalExpenses : {},
    income : [],
    savings: false
};

appData.expenses[qu1] = qu2;
