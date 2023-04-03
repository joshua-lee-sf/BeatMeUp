const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json' ;
let freeSoundAPI;

function randomIdFinder(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
};

export async function fetchJamendoSound() {
  let jamendoID = randomIdFinder(10, 250100);
  const jamendoAPI = `https://api.jamendo.com/v3.0/tracks?client_id=096b8c72&id=${jamendoID}` ;
  try{
    let res = await fetch(jamendoAPI);
    let body = await res.json();
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

//bring into index.js
let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')

//bring into index.js
audioAPISelector.addEventListener('change', function(){
  if (audioAPISelector.value === 'jamendoAPI') {
    generateRandomSound.addEventListener('click', fetchJamendoSound)
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', fetchYoutubeSound)
  } else {
    generateRandomSound.addEventListener('click', 12345)
  }
})

async function fetchYoutubeSound() {
  const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json';
  try {
    let res = await fetch(youtubeAPI);
    let body = await res.json();
    let randomId = randomIdFinder(0, 5142);
    let youtubeSoundKey = body.arr[randomId];
    console.log(body.map[youtubeSoundKey])
  } catch (error) {
    console.log(error)
  }
}
