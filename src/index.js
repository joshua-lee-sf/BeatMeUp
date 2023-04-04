import {visualizer} from './scripts/canvas';
import {circularDrawer} from './scripts/circularDrawer';
import {rectangleDrawer} from './scripts/rectangularDrawer'
import {fetchJamendoSound, fetchYoutubeSound, fetchFreeSound} from './scripts/audio';

let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')
let audioElement = document.getElementById('audio-element')
let visualizerShape = document.getElementById('shape-selector')


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

// visualizerShape.addEventListener('change', function(){
//   if (visualizerShape.value === 'rectangle') {
//     audioElement.addEventListener('play', visualizer(rectangleDrawer));
//   } else {
//     audioElement.addEventListener('play', visualizer(circularDrawer));
//   }
// })

audioElement.addEventListener('play', function(){
  visualizerShape.addEventListener('change', function(){
    if (visualizerShape.value === "rectange") {
      visualizer(rectangleDrawer());
    } else {
      visualizer(circularDrawer());
    }
  })
});