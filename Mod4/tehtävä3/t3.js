
const tvFormEle = document.querySelector('#tv');
const tvResults = document.querySelector('#results')



const showApi = `https://api.tvmaze.com/`
tvFormEle.addEventListener('submit', async function(evt) {

  evt.preventDefault();
  const haku = tvFormEle.querySelector('input[name=q]').value

  //const query = `https://api.tvmaze.com/search/shows?q=${haku}`
  const formData = new FormData(tvFormEle)
  const queryString = new URLSearchParams(formData).toString()
  try {
    const response = await fetch(`${showApi}/search/shows?${queryString}`);

    const data = await response.json();

    console.log(data);

    tvResults.innerHTML='';

    for (const tshow of data){

      const h2 = document.createElement('h2');

      h2.innerText = tshow.show.name;



      const img = document.createElement('img');
      img.src = tshow.show.image  ? tshow.image.medium :
        'https://placeholdit.com/210x295';
      img.alt =tshow.show.name;
      //[0].show.image.medium
     //undefined medium

      const art = document.createElement('article');
      art.append(h2,img);

      tvResults.append(art)



    }





  } catch (error) {
    console.log(error)

  }

});