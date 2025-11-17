'use strict'

function rolldice(){


  return Math.floor(Math.random()*6)+1



}

let currentValue = 0;


while (currentValue!==6){

  currentValue= rolldice()

  document.querySelector('#target').innerHTML += `<li>${currentValue}</li>`;

}


