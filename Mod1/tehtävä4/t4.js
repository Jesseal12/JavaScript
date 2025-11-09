'use strict';

//kysy nimeä

// arvo huone (numero 1-4)
const houses =["Gryffindor","Huffelpuff","Ravenclaw","Slytherin"]
const huone = Math.floor(Math.random()*4)

console.log(huone)
document.querySelector('#house').innerHTML = `Welcome to ${houses[huone]}`
