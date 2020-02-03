

let startBtn = document.getElementById("start"),
    inputBudget = document.querySelector(".budget-value"),
    inputDayBudget = document.querySelector(".daybudget-value"),
    inputLevel = document.querySelector(".level-value"),
    inputExpenses = document.querySelector(".expenses-value"),
    inputOptionalexpenses = document.querySelector(".optionalexpenses-value"),
    inputIncome = document.querySelector(".income-value"),
    inputMonthsavings = document.querySelector(".monthsavings-value"),
    inputYearsavings = document.querySelector(".yearsavings-value"),
    inputItem = document.querySelectorAll('.expenses-item'),
    acceptBtnOne = document.getElementsByTagName('button')[0],
    acceptBtnTwo = document.getElementsByTagName('button')[1],
    acceptBtnResult = document.getElementsByTagName('button')[2],
    optionaInput = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.getElementById("savings"),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money, time;


startBtn.addEventListener('click', function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

    appData.budget = money;
    appData.timeData = time;
    inputBudget.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

acceptBtnOne.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < inputItem.length; i++) {
        let a = inputItem[i].value,
            b = inputItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
console.log(inputExpenses);
    inputExpenses.textContent = sum;
});

acceptBtnTwo.addEventListener('click', function() {
    for (let i = 0; i <= optionaInput.length; i++) {
        let opt = optionaInput[i].value;
        appData.optionalExpenses[i] = opt;
        inputOptionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};
