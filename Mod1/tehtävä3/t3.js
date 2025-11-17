'use strict'

const luku  =2 ;
const luku2 =2;
 const list =   [luku,luku2];

console.log(list.length);
let summa = luku+luku2;
let tulo = luku*luku2;
let keskiarvo = luku*luku2/list.length;
console.log(summa)
console.log(tulo)
console.log(keskiarvo)
document.querySelector('#target1').innerHTML= `Summa on ${summa}`
// ei ole väliä mitä teen se näkee summan tyhjänä

document.querySelector('#target2').innerHTML= `Tulo on ${tulo}`

document.querySelector('#target3').innerHTML= `Keskiarvo on ${keskiarvo}`
