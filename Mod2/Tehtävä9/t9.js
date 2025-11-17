'use strict'

function even(numbers){
  const evenNumbers = [];
  for( let value of numbers){
    if(value % 2 ===0){

      evenNumbers.push(value)
    }

  }
  return evenNumbers
}



const numerot = [12,3,5,9,4]

const newList = even(numerot)

console.log(numerot)
console.log(newList)
