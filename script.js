let num1 = '';
let num2 = '';
let operator = '';

const displayNumber = document.getElementById('display');

const numbers = document.querySelectorAll('.number-button');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (!operator) {
      num1 += e.target.value;
      console.log('num1: ', num1);
      displayNumber.value = num1;
    }
    if (num1 && operator) {
      num2 += e.target.value;
      console.log('num2: ', num2);
      displayNumber.value = num2;
    }
  });
});

const operators = document.querySelectorAll('.operator-button');
operators.forEach((operatorValue) => {
  operatorValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (num1) operator += e.target.value;
    console.log('operator: ', operator);
  });
});

function performCalculation() {
  // convert num1 and num2 to numbers
  // check value of operator
  // execute correct calculation based on value of operator and
  //num1 and num2
  //update display with result
}

/*
const operators = document.querySelectorAll('.operator-button');
operators.forEach((operator) (e) => {

});

buttonTwo.addEventlistener("click", (e) => displayNumbers());
plusButton.addEventlistener();
equals.addEventlistener();
minusButton.addEventlistener();


        if (operator) {
          number.clicked === num1;
        } else {
          number.clicked === num2;
        }
*/
