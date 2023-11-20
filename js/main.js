let operator = '';
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

});

function handleNumber(num){
    curValue += num;
}