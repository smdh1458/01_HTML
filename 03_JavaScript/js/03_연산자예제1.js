const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const number3 = document.getElementById("input3");
const result = document.getElementById("calcResult");

const value1 = number1.value;
const value2 = number2.value;
const value3 = number3.value;

function plus() {
  result.innerText =
    Number(number1.value) + Number(number2.value) + Number(number3.value);
}

function multi() {
  result.innerText =
    Number(number1.value) * Number(number2.value) * Number(number3.value);
}
