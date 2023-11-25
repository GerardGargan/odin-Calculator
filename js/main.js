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
        let result = 0;
        switch(operatorValue){
            case "+":
                result = parseInt(curValue) + parseInt(prevValue);
            break;
            case "-":
                result = parseInt(prevValue) - parseInt(curValue)
            break;
            case "x":
                result = parseInt(prevValue) * parseInt(curValue);
            break;
            case "/":
                result = parseInt(prevValue) / parseInt(curValue);
            break;
            default: result = parseInt(0);
        }
        curScreen.textContent = result;
        prevScreen.textContent = "";
        curValue = result;
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


});

