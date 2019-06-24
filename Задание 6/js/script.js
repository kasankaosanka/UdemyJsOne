"use strict";

let startButton = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    expenses = document.getElementsByClassName("expenses-item"),
    expensesButton = document.getElementsByTagName("button"[0]),
    optionalexpensesButton = document.getElementsByTagName("button"[1]),
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    countBudget = document.querySelector(".count-budget-btn"),
    income = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

    let money, time;

    function start() {
        money =+ prompt ("Ваш бюджет на месяц?", "");
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
        while(isNaN(money) || money == "" || money == null) {
            money =+ prompt ("Ваш бюджет на месяц?", "");
        }
    };
    
    start();
        
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt ("Во сколько обойдется?", "");
            
                if ( typeof(a)==="string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                    appData.expenses[a] = b;
                } else {
                    i--;
                };    
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log ("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
                console.log ("Это средний уровень достатка!");
            } else if (appData.moneyPerDay >= 2000) {
                console.log ("Это высокий уровень достатка!");
            } else {
                console.log ("Произошла ошибка");
            }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() { 
            for (let i = 1; i <= 3; i++) {
                let optional = +prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = optional; 
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if (typeof(items) != "string" || typeof(items) == null || items == "") {
                console.log("Вы ввели некорректные данные");
            } else {
                appData.income = items.split(",");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();            
            };
            appData.income.forEach(function(item, index){
                alert("Способы доп. заработка: " + (index+1) + " - " + item);
            });
        }
    };
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }