import { drawSelector} from './scripts/canvas';
import {fetchJamendoSound, fetchYoutubeSound, fetchFreeSound} from './scripts/audio';

let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')
let audioElement = document.getElementById('audio-element')
audioElement.volume = 0.2;

let visualizerShape = document.getElementById('shape-selector')
const barSize = document.getElementById('size');
let fftSizeInput = document.getElementById('bar-amount');

//bring into index.js
audioAPISelector.addEventListener('input', function(){
  if (audioAPISelector.value === 'jamendoAPI') { 
    generateRandomSound.addEventListener('click', () => {
      if(!barSize.value || fftSizeInput.value === '32768' || !visualizerShape.value){
        alert('Please select a bar size, fft size, and visualizer shape')
      }
      else {
      fetchJamendoSound();
    }});
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', ()=> {
      if(!barSize.value || fftSizeInput.value === '32768' || !visualizerShape.value){
        alert('Please select a bar size, fft size, and visualizer shape')
      }
      else {
      fetchYoutubeSound();
    }});
  } else {
    generateRandomSound.addEventListener('click', () => {
      if(!barSize.value || fftSizeInput.value === '32768' || !visualizerShape.value){
        alert('Please select a bar size, fft size, and visualizer shape')
      }
      else {
      fetchFreeSound();
    }});
  }
})


// visualizerShape.addEventListener('input', function(){
//   if (visualizerShape.value === 'rectangle') {
//     audioElement.addEventListener('play', visualizer(rectangularDrawer));
//   } else {
//     audioElement.addEventListener('play', visualizer(circularDrawer));
//   }
// })


audioElement.addEventListener('play', drawSelector);