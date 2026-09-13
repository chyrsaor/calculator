// The essential operators of calculators 

let firstNum ='';
let secondNum ='';
let algebra = '';

const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const symbols = ['+',"-","/","*","%"];

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}
function modulo(a, b){
    return a%b;
}

function operate(a, b, alg){
    console.log(a, b);
    if(alg == "+"){
        return add(a, b);
    }else if(alg == "-"){
        return subtract(a, b);
    }else if(alg == "*"){
        return multiply(a, b);
    }else if(alg == "/"){
        return divide(a, b);
    }else if(alg == "%"){
        return modulo(a, b);
    }else{
        return "that operation is not supported.";
    }
}

const numBtns = document.getElementsByClassName("num");
const display = document.getElementById("display");
const sign = document.getElementsByClassName("operations");
const equal = document.getElementById("equal");

const btns = document.querySelectorAll(".btn");



let mathmatica = "";
let values = [];

let results = null;

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.innerText == 'clear'){
            mathmatica ="";
            display.value = "";
            values = [];
            return;
        }
        let groomed = mathmatica.split(/([%/*+-])/);
        
        
        if(btn.innerText == '='){
            // display.value= eval(mathmatica);
            console.log(groomed);
            if(groomed.length < 3){
                display.value = "That doesn't work bud!";
                return
            }else if(Number(groomed[2]) == 0){
                display.value = "You Dare Use My Own Spells Against Me??";
                return
            }
            results = operate(Number(groomed[0]), Number(groomed[2]), groomed[1]);
            results = Number(results).toFixed(1)
            display.value = results;

            mathmatica = results + "";
            values = [];
            return;
        }

        
        mathmatica += btn.innerText;
        display.value = mathmatica;

        if(values.length<3){
            values.push(btn.innerText);
        }
        console.log(values[0], values[1], values[2]);
    })
});

