//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
/*fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    });*/
      
const words = document.querySelector('#wrap')

document.querySelector('button').addEventListener('click',getQuote)

document.querySelector('button, .button2').addEventListener('click',showInfo)

function showInfo(){
  words.classList.remove('hidden')
}
 
function getQuote(){
  let title = document.querySelector('input').value

  const ANIME_url = `https://animechan.vercel.app/api/quotes/anime?title=${title}`
    fetch(ANIME_url)
      .then(res => res.json())
      .then(data => {
        const random = [Math.floor(Math.random() * data.length)]
        console.log(data[random])
        
          document.querySelector('h2').innerText = data[random].anime
          document.querySelector('h3').innerText = data[random].character
          document.querySelector('h4').innerText = data[random].quote
      }) 
      .catch(err => {
        console.log(`error ${err}`)
      })
}

document.querySelector('.button2').addEventListener('click',getRandom)

function getRandom(){
  const ANIMERANDOM_url = 'https://animechan.vercel.app/api/random'
  fetch(ANIMERANDOM_url)
        .then(res => res.json())
        .then(data=> {
          console.log(data)

            document.querySelector('h2').innerText = data.anime
            document.querySelector('h3').innerText = data.character
            document.querySelector('h4').innerText = data.quote
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
}