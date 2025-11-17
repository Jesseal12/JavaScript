'use strict'

const diceList= [];

const noppaMaara =  prompt("Anna noppien määrä : ");

const s = document.querySelector('#summa');
let aloitusArvo= 0;





while (aloitusArvo<=parseInt(noppaMaara)){
   const  arvo = Math.floor(Math.random()*6+1)
    diceList.push(arvo);
    aloitusArvo+=1;
    console.log(aloitusArvo);


}
let total = 0;
for (const value of diceList){
  total += value;


}
s.innerText = total;