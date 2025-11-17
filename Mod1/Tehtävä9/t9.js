

const number = prompt("Please enter a number bigger than 0");
const p= document.querySelector('#prime');

if (number % 2 !==0 && number%3!==0 && number%5!==0 && number%7!==0 ){

  p.innerText = `${number} is a prime number`;


}

else {
    p.innerText = `${number} is not a prime number`


}
