const ul = document.querySelector('#target');


//t = ["First item","Second item","Third item"]
const li = document.createElement('li')
const t1= document.createTextNode('First item')
const t2 = document.createTextNode('Second item')
const t3 = document.createTextNode('Third item')


li.appendChild(t1)
li.appendChild(t2)
li.appendChild(t3)
// for (item in t){
// text = document.createTextNode(item.)
// li.append(text)
// }


ul.appendChild(li)