import _ from './rectangularDrawer';
import __ from './circularDrawer';
import { fetchJamendoSound } from './audio';

let visualizerShape = document.getElementById('shape-selector')
let fftSize = document.getElementById('size-selector').value;


//canvas setup
window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
window.canvas.width = window.innerWidth; //might change
window.canvas.height = window.innerHeight; // might change

//audio set up
const audioElement = document.getElementById('audio-element');
let audioSource;
let analyzer;

//visualizer function
function visualizer(drawerFunc){
  const audioContext = new AudioContext();
  audioElement.src = '/Users/joellee/Desktop/AppAcademyGit/Projects/BeatMeUp/assets/682338__henkonen__sax-solo-2.wav'; //change this to the audio source of the element? Maybe in another function?
  audioSource = audioContext.createMediaElementSource(audioElement);
  analyzer = audioContext.createAnalyser();
  audioSource.connect(audioContext.destination);
  audioSource.connect(analyzer);
  analyzer.fftSize = fftSize; 
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = canvas.width/bufferLength
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

// event listeners
visualizerShape.addEventListener('change', function(){
  if (visualizerShape.value === 'rectangle') {
    audioElement.addEventListener('play', visualizer(rectangleDrawer));
  } else {
    audioElement.addEventListener('play', visualizer(circularDrawer));
  }
})