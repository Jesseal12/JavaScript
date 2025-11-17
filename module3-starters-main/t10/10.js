'use strict'


const lomake = document.querySelector('#source')
const p = document.querySelector('#target')

lomake.addEventListener('submit',function(evt){

  evt.preventDefault();
  const formData = new FormData(lomake);

  const etuNimi = formData.get('firstname')
  const sukuNimi = formData.get('lastname')


  p.innerText = `Your name is ${etuNimi} and last is ${sukuNimi}`
  // console.log(lomake)
  // const queryString = new URLSearchParams(formData)
  // console.log(queryString.toString())


})
