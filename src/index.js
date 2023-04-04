import {visualizer} from './scripts/canvas';
import {circularDrawer} from './scripts/circularDrawer';
import {rectangleDrawer} from './scripts/rectangularDrawer'
import {fetchJamendoSound, fetchYoutubeSound, fetchFreeSound} from './scripts/audio';

let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')
let audioElement = document.getElementById('audio-element')
let visualizerShape = document.getElementById('shape-selector')

// let fftSize = document.getElementById('size-selector');

// fftSize.addEventListener('change', function(){
//   fftSize = parseInt(document.getElementById('size-selector').value)
// })


//bring into index.js
audioAPISelector.addEventListener('change', function(){
  if (audioAPISelector.value === 'jamendoAPI') {
    generateRandomSound.addEventListener('click', fetchJamendoSound);
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', fetchYoutubeSound)
  } else {
    generateRandomSound.addEventListener('click', fetchFreeSound)
  }
})

visualizerShape.addEventListener('change', function(){
  if (visualizerShape.value === 'rectangle') {
    audioElement.addEventListener('play', visualizer(rectangleDrawer));
  } else {
    audioElement.addEventListener('play', visualizer(circularDrawer));
  }
})

window.hueRange = document.getElementById('hue-slider')
window.hueRange.addEventListener('change', ()=>{
  // let bubble = hueRange.appendChild('output')
  bubble.innerHTML = hueRange.value;
})

// audioElement.addEventListener('play', function(){
//   if (visualizerShape.value === 'rectangle') {
//     visualizer(rectangleDrawer)
//   } else {
//     visualizer(circularDrawer)
//   }
// });