'use strict'

const rootQuestion = prompt("Lasketaanko neliöjuuri : ")


const rootValue = document.querySelector('#target')

if (rootQuestion==="ok"){

  const arvo = prompt("Anna arvo : ");

  if (arvo>1){

     const sqrt = Math.sqrt(arvo);
     rootValue.innerText = sqrt;


  }

 else {
   throw DOMException("väärä arvo")
  }


}

else {
  throw DOMException("Bye bye");

}