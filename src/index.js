import _ from './scripts/canvas';
import {fetchJamendoSound, fetchYoutubeSound, fetchFreeSound} from './scripts/audio';

let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')

//bring into index.js
audioAPISelector.addEventListener('change', function(){
  if (audioAPISelector.value === 'jamendoAPI') {
    generateRandomSound.addEventListener('click', fetchJamendoSound)
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', fetchYoutubeSound)
  } else {
    generateRandomSound.addEventListener('click', fetchFreeSound)
  }
})