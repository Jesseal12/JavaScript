const numerot= [];

const numeroIchi = prompt("syötä numero:  ");

numerot.push(numeroIchi);

const numeroNi = prompt("Syötä toinen numero:");

numerot.push(numeroNi);

const numeroSan = prompt("Syötä kolmas numero : ");

numerot.push(numeroSan);

const numeroYon =prompt("Syötä neljäs numero : ");

numerot.push(numeroYon);

const  numeroGo = prompt("Syötä viideos numero:");

numerot.push(numeroGo);


for (i=4;i>=0;i--){

  console.log(numerot[i]);

}