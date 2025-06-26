
let firstNum = '';
let operator = '';

function display(num) {
  document.querySelector('.inputCalculator').value += num;
}

function sum() {
  firstNum = document.querySelector('.inputCalculator').value;
  operator = '+';
  document.querySelector('.inputCalculator').value = " "
} 

function difference() {
  firstNum = document.querySelector('.inputCalculator').value;
  operator = '-';
  document.querySelector('.inputCalculator').value = '';
}

function mul() {
  firstNum = document.querySelector('.inputCalculator').value;
  operator = '*';
  document.querySelector('.inputCalculator').value = '';
}

function div() {
  firstNum = document.querySelector('.inputCalculator').value;
  operator = '/';
  document.querySelector('.inputCalculator').value = '';
}

function equals() {
  let secondNum = document.querySelector('.inputCalculator').value;
  let result = 0;

  if (operator === '+') {
    result = Number(firstNum) + Number(secondNum);
  } else if (operator === '-') {
    result = Number(firstNum) - Number(secondNum);
  } else if (operator === '*') {
    result = Number(firstNum) * Number(secondNum);
  } else if (operator === '/') {
    result = Number(firstNum) / Number(secondNum);
  }

  document.querySelector('.inputCalculator').value = result;
  firstNum = '';
  operator = '';
}
function clearInput()
{
   firstNum = '';
  operator = '';
  document.querySelector('.inputCalculator').value ='';
}

function pink()
{
  let b=document.querySelector('.change');
  b.style.backgroundColor="rgb(243, 151, 202)";
}
  
function yellow()
{
  let b=document.querySelector('.change');
  b.style.backgroundColor="rgb(237, 243, 151)";

}
function original()
{
  let b=document.querySelector('.change');
  b.style.backgroundColor="white";
 
 
}