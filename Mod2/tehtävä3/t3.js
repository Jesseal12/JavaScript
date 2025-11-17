

const dogList= []
const koirat = document.querySelector('#doggo')
for (i=1;i<=6;i++ ){

 let koiraNimi=  prompt(`Anna koira ${i} nimen`)
  dogList.push(koiraNimi)

}

dogList.sort()
dogList.reverse()

for (const dog of dogList){

  koirat.innerHTML += `<ul>${dog}</ul>`


}