'use strict'


const summa = prompt("Aseta haluttu summa");
const nopat = prompt("Aseta haluttu määrä noppia");
const tod = document.querySelector('#todennakoisyys')

function NoppaLasku(nopat){
  const noppaLista = []

  let  summaArvo =0
  for (let i =0; i<nopat;i++){

    const noppaArvo = Math.floor(Math.random()*6+1)
    noppaLista.push(noppaArvo)

  }
for (const noppa in noppaLista){
  console.log(noppa)

  summaArvo+= noppa


}


  return summaArvo
}
let aquiredValue = 0;
let loop = 0
for (let i=0;i<10000;i++){
loop += 1
const uusiSumma = NoppaLasku(nopat)

  if(uusiSumma===summa ){
    aquiredValue +=1
  }
 const todenNakoyisyys =aquiredValue % 10000
if( loop===10000){
  tod.innerText += `todennäköisuus sumalle on ${todenNakoyisyys}%`

}




}