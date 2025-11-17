const addName = document.querySelector('#target');

const list = ["first item","second item","third item"]


for (item of list){


  addName.innerHTML += `<li>${item}</li>`;

}
