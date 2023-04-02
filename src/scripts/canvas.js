//canvas setup
const canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
canvas.width = window.innerHeight; //might change
canvas.height = window.innerWidth; // might change

//audio set up
let audioSource;
let analyzer;
let audioElementSrc;

