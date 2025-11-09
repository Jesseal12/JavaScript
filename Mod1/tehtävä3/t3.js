'use strict'

const luku  = prompt("2") ;
const luku2 =prompt("2");
 const list =   [luku,luku2];

console.log(list.length);
let summa = parseFloat(luku)+ parseFloat(luku2);
document.querySelector('#Summa').innerHTML=summa.toString();
// ei ole väliä mitä teen se näkee summan tyhjänä
let tulo = parseFloat(luku)*parseFloat(luku2);
document.querySelector('#Tulo').innerHTML=tulo.toString();
let keskiarvo = (parseFloat(luku)+parseFloat(luku2))/list.length;
document.querySelector('#Keskiarvo').innerHTML=keskiarvo.toString();

