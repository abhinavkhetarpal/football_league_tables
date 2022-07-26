//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

  // const choice = document.querySelector('input').value
  
 
  const justCors = "https://justcors.com/tl_f9c9ecb/"
  const url = 'https://api.football-data.org/v4/competitions/'

  fetch(justCors + url,{
    headers: {
      "X-Auth-Token": "77bf0d030b9a42a3a0791ddff8c53b03"
    }
  })
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        for (let i=0; i<13; i++){
          document.getElementById(`${i}`).src = data.competitions[i].emblem
          
        } 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



    



      
