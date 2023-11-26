let operatorValue = '';
let prevValue = '';
let curValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let prevScreen = document.querySelector(".previous");
    let curScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        curScreen.textContent = curValue;
    }));

    operators.forEach((operator) => {
        operator.addEventListener("click", function(e) {
            handleOperator(e.target.textContent);
            prevScreen.textContent = prevValue + " " + operatorValue;
            curScreen.textContent = curValue;
        });
    });


    clear.addEventListener("click", () => {
        operatorValue = "";
        curValue = "";
        prevValue = "";
        prevScreen.textContent = "";
        curScreen.textContent = "";
    });

    equal.addEventListener("click", function (){
        calculate();
        curScreen.textContent = prevValue;
        prevScreen.textContent = "";
        curValue = prevValue;
    });

    function handleNumber(num){
        if(curValue.length <= 5){
            curValue += num;
        }
        
    }

    function handleOperator(op){
        operatorValue = op;
        prevValue = curValue;
        curValue = "";
        
    }

    function calculate(){
        prevValue = Number(prevValue);
        curValue = Number(curValue);
        
        switch(operatorValue){
            case "+":
             prevValue = parseInt(curValue) + parseInt(prevValue);
            break;
            case "-":
             prevValue = parseInt(prevValue) - parseInt(curValue)
            break;
            case "x":
             prevValue = parseInt(prevValue) * parseInt(curValue);
            break;
            case "/":
             prevValue = parseInt(prevValue) / parseInt(curValue);
            break;
            default: prevValue = parseInt(0);
        }

    }

    
});

