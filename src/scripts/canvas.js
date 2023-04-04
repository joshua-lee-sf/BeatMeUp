import {rectangleDrawer} from './rectangularDrawer';
import {circularDrawer} from './circularDrawer';
import { fetchJamendoSound, fetchFreeSound, fetchYoutubeSound } from './audio';


let fftSize = document.getElementById('bar-amount');
let fftSizeValue;

fftSize.addEventListener('input', function(){
  fftSizeValue = parseInt(fftSize.value)
  fftSize.value = fftSizeValue
})

//canvas setup
window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
// window.canvas.width = window.innerWidth; //might change
// window.canvas.height = window.innerHeight; // might change

//audio set up
const audioElement = document.getElementById('audio-element');
let audioSource;
let analyzer;

//visualizer function
export function visualizer(drawerFunc){
  console.log('drawing');
  const audioContext = new AudioContext();
  audioSource = audioContext.createMediaElementSource(audioElement);
  analyzer = audioContext.createAnalyser();
  audioSource.connect(audioContext.destination);
  audioSource.connect(analyzer);
  analyzer.fftSize = fftSizeValue; 
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = canvas.width/(Math.floor(bufferLength - 5))
  let barHeight;
  let xPos;
  
  function animation(){
      xPos = 0;
      canvasCtx.clearRect(0,0,canvas.width, canvas.height)
      analyzer.getByteFrequencyData(dataArray);
      drawerFunc(bufferLength, xPos, barWidth, barHeight, dataArray);
      requestAnimationFrame(animation);
  }

  animation();
}


