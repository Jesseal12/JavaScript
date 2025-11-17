'use strict';
const kohde = document.querySelector("#target")
const alku = prompt("Syötä aloitus vuosi")
const loppu = prompt("Syötä lopetus vuosi")


for(let i=parseInt(alku);i<=parseInt(loppu);i++){
  if(i%4===0 && i%100!==0||i%100===0 && i%400===0){
    kohde.innerHTML += `<ul>${i}</ul>`
  }

}