'use strict';


const show = document.querySelector('#tvForm');

const showApi = `https://api.tvmaze.com/`
show.addEventListener('submit', async function(evt) {

  evt.preventDefault();
  const haku = show.querySelector('input[name=q]').value

  //const query = `https://api.tvmaze.com/search/shows?q=${haku}`
  const formData = new FormData(show)
  const queryString = new URLSearchParams(formData).toString()
  try {
    const response = await fetch(`${showApi}/search/shows?${queryString}`);

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error)

  }

});




