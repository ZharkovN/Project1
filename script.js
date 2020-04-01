let money,time;
function start() {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату", "YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeDate: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true,
    ChooseExpenses: function() {
        for(let i = 0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",""),
                b = prompt("Во сколько обойдется?","");
            
            if((typeof(a))==='string' && ((typeof(a)) != null) && ((typeof(b)) != null)
                && a != '' && b != '' && a.length < 50){
                console.log('done');
                appData.expenses[a] = b;
            }else{
                console.log("Плохой результат, попробуйте еще раз");
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for(let i = 0; i<3; i++){
            let a = prompt("Введите НЕобязательную статью расходов в этом месяце",""),
                b = prompt("Во сколько обойдется?","");
            
            if((typeof(a))==='string' && ((typeof(a)) != null) && ((typeof(b)) != null)
                && a != '' && b != '' && a.length < 50){
                console.log('done');
                appData.optionalExpenses[a] = b;
            }else{
                console.log("Плохой результат, попробуйте еще раз");
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Уровень вашего достатка минимальный")
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Уровень вашего достатка средний")
        }else if(appData.moneyPerDay > 2000){
            console.log("Уровень вашего достатка высокий")
        }else{
            console.log("Возникла ошибка")
        }
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.mounthInCome = save/100/12 *percent;
            alert("Доход в месяц с вашего депозита: " + appData.mounthInCome);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую","");
        if((typeof(items) === 'string') && (items !== null) && (items !== "")){
            appData.income = items.split(",");
            appData.income.push(prompt("Может что-то еще забыл?"));
            appData.income.sort();
            appData.income.forEach(function(item,i,income){
                alert( i + ": " + item + " (массив:" + income + ")" );
            });
            
        }else{
            alert("Пожалуйста, введите корректные данные!")
        }
    }
};
for (key in appData){
    console.log("appData." + key + " = " + appData[key])
};
