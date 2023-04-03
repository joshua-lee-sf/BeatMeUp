const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json' ;
let freeSoundAPI;

function jamendoRandomID(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
};

export async function fetchJamendoSound() {
  let jamendoID = jamendoRandomID(10, 250100);
  let jamendoAPI = `https://api.jamendo.com/v3.0/tracks?client_id=096b8c72&id=${jamendoID}` ;
  try{
    let res = await fetch(jamendoAPI)
    let body = await res.json()
    console.log(body, 'body')
    if (body.results.length === 1) {
      body.results[0].audio
    } else {
      return await fetchJamendoSound();
    };
    }
    catch (err) {
    console.log(err)
  };
}

let audioAPI = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')

if (audioAPI.value === 'jamendoAPI') {
  generateRandomSound.addEventListener('click', fetchJamendoSound());
}