"use strict";

let startButton = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    expenses = document.getElementsByClassName("expenses-item"),
    expensesButton = document.getElementsByTagName("button")[0],
    optionalExpensesButton = document.getElementsByTagName("button")[1],
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
    
    startButton.addEventListener("click", function() {        
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");
        money =+ prompt ("Ваш бюджет на месяц?", "");
    
        while(isNaN(money) || money == "" || money == null) {
            money =+ prompt ("Ваш бюджет на месяц?", "");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();
    });

    expensesButton.addEventListener("click", function() {
        let sum = 0;
        for (let i = 0; i < expenses.length; i++) {
            let a = expenses[i].value,
                b = expenses[++i].value;
        
            if ( typeof(a)==="string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }   
        }
        expensesValue.textContent = sum;
    });

    optionalExpensesButton.addEventListener("click", function() {
        for (let i = 0; i < optionalExpenses.length; i++) {
            let optional = optionalExpenses[i].value;
            appData.optionalExpenses[i] = optional;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBudget.addEventListener("click", function() {
        if (appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Это минимальный уровень достатка!";
            } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Это средний уровень достатка!";
            } else if (appData.moneyPerDay >= 2000) {
                levelValue.textContent = "Это высокий уровень достатка!";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
          } else {
              daybudgetValue.textContent = "Произошла ошибка";
          }      
    });

    income.addEventListener("input", function() {
        incomeValue = income.value;
    })

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,       
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseIncome: function() {
            
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
    