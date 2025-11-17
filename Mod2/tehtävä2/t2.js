
const pelaajaMaara = prompt("Kerro kuinka monta pelaajaa tarviit");
playerList = []
const uusiPelaaja = document.querySelector('#pelaajat')
for (i=1;i<=pelaajaMaara;i++ ){

 let pelaajaNimi=  prompt(`Anna pelaaja ${i} nimen`)
  playerList.push(pelaajaNimi)

}

   playerList.sort()

for (player of playerList){
  uusiPelaaja.innerHTML += `<ol>${player}</ol>`

}

