var exp = "";

var screen = document.getElementById("screen");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var divide = document.getElementById("divide");

var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var multiply = document.getElementById("multiply");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var minus = document.getElementById("minus");

var btn0 = document.getElementById("btn0");
var dot = document.getElementById("dot");
var plus = document.getElementById("plus");



function nextInLine(arr, item) {
  // Your code here
  
  arr.push(item);
  item = arr.shift();
  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + testArr);

btn7.onclick = function(){
    click(btn7);
}
btn8.onclick = function(){
    click(btn8);
}
btn9.onclick = function(){
    click(btn9);
}
divide.onclick = function(){
    click(divide);
}

btn4.onclick = function(){
    click(btn4);
}
btn5.onclick = function(){
    click(btn5);
}
btn6.onclick = function(){
    click(btn6);
}
multiply.onclick = function(){
    click(multiply);
}

btn1.onclick = function(){
    click(btn1);
}
btn2.onclick = function(){
    click(btn2);
}
btn3.onclick = function(){
    click(btn3);
}
minus.onclick = function(){
    click(minus);
}

btn0.onclick = function(){
    click(btn0);
}
dot.onclick = function(){
    click(dot);
}
plus.onclick = function(){
    click(plus);
}

function click(btn){
    exp = exp + btn.textContent;
    screen.textContent = exp;


}


var calculate = document.getElementById("calculate");

calculate.onclick = function(){
    var ans = eval(exp);
    exp = ans;
    screen.textContent = ans; 
}

var backspace = document.getElementById("backspace");

backspace.onclick = function(){
    exp = exp.slice(0,exp.length-1);
    screen.textContent = exp;
}