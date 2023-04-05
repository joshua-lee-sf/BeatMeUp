import {circularDrawer, rectangularDrawer} from './drawer';
import { fetchJamendoSound, fetchFreeSound, fetchYoutubeSound } from './audio';


let fftSizeInput = document.getElementById('bar-amount');
let fftSizeValue = fftSizeInput.value;

fftSizeInput.addEventListener('change', function(){
  fftSizeValue = parseInt(fftSizeInput.value)
})

//canvas setup
window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');

//audio set up
const audioElement = document.getElementById('audio-element');
const audioContext = new AudioContext();
let analyzer = audioContext.createAnalyser();;
let audioSource;

analyzer.fftSize = fftSizeValue;
let bufferLength = analyzer.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);
let barWidth = canvas.width/(Math.floor(bufferLength - 5))
let barHeight;
let xPos;

let disconnected = true;

// visualizer event listener for change
let visualizerShapeSelector = document.getElementById('shape-selector')

visualizerShapeSelector.addEventListener('change', drawSelector);

//visualizer function
export function visualizer(drawerFunc){
  function animation(){
    xPos = 0;
    canvasCtx.clearRect(0,0,canvas.width, canvas.height)
    analyzer.getByteFrequencyData(dataArray);
    drawerFunc(bufferLength, xPos, barWidth, barHeight, dataArray);
    requestAnimationFrame(animation);
  }

  let animate = requestAnimationFrame(animation);

  if (animate) {
    cancelAnimationFrame(animate);
  }

  if(audioContext.state === 'suspended'){
    audioContext.resume();
  }
  
  if(disconnected) {
    audioSource = audioContext.createMediaElementSource(audioElement);
    audioSource.connect(analyzer);
    analyzer.connect(audioContext.destination)
    animation();
    disconnected = false;
  }
  
  animation();
  
  };


// add an event listener to the input element to update the visualizer whenever the input changes
fftSizeInput.addEventListener('change', function(){
  analyzer.fftSize = fftSizeValue;
  bufferLength = analyzer.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
  barWidth = canvas.width/(Math.floor(bufferLength - 5))
});


export function drawSelector(){
  if (visualizerShapeSelector.value === 'rectangle') {
    visualizer(rectangularDrawer);
  } else {
    visualizer(circularDrawer);
  }
}




































