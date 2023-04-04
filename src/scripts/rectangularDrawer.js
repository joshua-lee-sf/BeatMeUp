window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
window.canvas.width = window.innerWidth; //might change
window.canvas.height = window.innerHeight; // might change

let hue = document.getElementById('hue-slider').value;
let saturation = document.getElementById('saturation-slider').value;
let lightness = document.getElementById('lightness-slider').value;
let plainOrRainbow = document.getElementById('rainbow');

export function rectangleDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  console.log('drawing');
  for (let i = 0; i < bufferLength; i++){
    hue = plainOrRainbow.value ? hue : hue * 5;
    barHeight = dataArray[i]
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}

