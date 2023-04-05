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
let analyzer;
let audioSource;


// visualizer event listener for change
let visualizerShapeSelector = document.getElementById('shape-selector')


//visualizer function
export function visualizer(drawerFunc){
  const audioContext = new AudioContext();
  audioSource = audioContext.createMediaElementSource(audioElement);
  audioSource.connect(audioContext.destination);
  analyzer = audioContext.createAnalyser();
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
  
  visualizerShapeSelector.addEventListener('change', function(){
    reVisualizer();
  });
}  

function reVisualizer(drawerFunc = visualizerShapeSelector.value === 'rectangle' ? rectangularDrawer : circularDrawer){
  if(audioSource !== null) {
    audioSource.disconnect();
  }
  audioSource.connect(audioContext.destination)
  analyzer = audioContext.createAnalyser();
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

function updateVisualizer() {
  if (analyzer && fftSizeValue) {
    analyzer.fftSize = fftSizeValue;
    drawSelector();
  }
}

// add an event listener to the input element to update the visualizer whenever the input changes
fftSizeInput.addEventListener('input', function(){
  console.log('changing fft');
  updateVisualizer();
});


export function drawSelector(){
  if (visualizerShapeSelector.value === 'rectangle') {
    visualizer(rectangularDrawer);
  } else {
    visualizer(circularDrawer);
  }
}



