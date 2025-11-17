'use strict';


const show = document.querySelector('#tvForm');


show.addEventListener('submit', async function(evt) {

  evt.preventDefault();
  const haku = show.querySelector('input[name=q]').value

  const query = `https://api.tvmaze.com/search/shows?q=${haku}`
  try {
    const response = await fetch(query);
    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error)

  }

});




