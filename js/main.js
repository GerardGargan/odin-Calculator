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

