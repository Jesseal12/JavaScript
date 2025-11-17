'use strict';
const names = ['John', 'Paul', 'Jones'];
const name = document.querySelector('#target')

for (const item of names){

  name.innerHTML += `<li>${item} </li>`

}

