import _ from './rectangularVisualizer'
import _ from './circularVisualizer'

//canvas setup
const canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
canvas.width = window.innerHeight; //might change
canvas.height = window.innerWidth; // might change

//audio set up
let audioSource;
let analyzer;
let audioElementSrc;

let rectangleVisualizer = document.getElementById('rectangle-button');
let circleVisualizer = document.getElementById('circle-button')

rectangleVisualizer.addEventListener('click', rectanglularVisualizer);

circleVisualizer.addEventListener('click', circularVisualize);
