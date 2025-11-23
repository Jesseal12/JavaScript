'use strict';

console.log(url)
const  hakuLomake = document.querySelector('#saatiedot')

async function haeSaaTiedot (evt){
  evt.preventDefault()

  try {
    const city = hakuLomake.document.querySelector('input[name=kaupunki]').value
    const query = `/weather?q=${city}&appid=${apiKey}&units=metric}`;
    const response = await fetch(url+query);
    const data = await response.json();
    console.log(data);
  }
  catch (error){


  }


}


haeSaaTiedot();
hakuLomake.addEventListener('submit',haeSaaTiedot);{

  try {
    const query2 = `${ImageUrl}${data.weather[0].icon.value}@2x.png`
    const response2 = await haeSaaTiedot()


  } catch (error){




  }

}

