import _ from './rectangularVisualizer'
import _ from './circularVisualizer'

let rectangleVisualizer = document.getElementById('rectangle-button');
let circleVisualizer = document.getElementById('circle-button')
const audioElement = document.getElementById('audio-element');


rectangleVisualizer.addEventListener('click', function() {
  audioElement.addEventListener('play', rectangleVisualizer());
});

circleVisualizer.addEventListener('click', function(){
  audioElement.addEventListener('play', circularVisualize());
});
