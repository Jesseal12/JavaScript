'use strict'

console.log('the scrip starts')

const airPortForm = document.querySelector('#airport-form')


    async function asynchronousFunction(evt) {                 // asynchronous function is defined by the async keyword
        evt.preventDefault()
      const code = document.querySelector('input[name =icao]').value
  console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('http://127.0.0.1:3000/kenttä/00A'+code);    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            if(!response.ok){

              alert()
            }
            document.querySelector('#target').innerText= `Name:${jsonData.Name},Kunta:${jsonData.municipality} `
          console.log(jsonData.ICAO, jsonData.Name);    // log the result to the console
        } catch (error) {
            console.log('Virhe'+error.message);
        } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
            console.log('asynchronous load complete');
        }
    }


    asynchronousFunction();

    console.log('the script ends');