window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
window.canvas.width = window.innerWidth; //might change
window.canvas.height = window.innerHeight; // might change


let hue = document.getElementById('hue-slider');
hue.addEventListener('change', function(){
  hue = parseInt(document.getElementById('hue-slider').value);
})


let saturation = document.getElementById('saturation-slider');
saturation.addEventListener('change', function(){
  saturation = parseInt(document.getElementById('saturation-slider').value);
})


let lightness = document.getElementById('lightness-slider');
lightness.addEventListener('change', function(){
  lightness = parseInt(document.getElementById('lightness-slider').value);
})


let plainOrRainbow = document.getElementById('rainbow');


export function circularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  console.log('drawing');
  for (let i = 0; i < bufferLength; i++){
    barHeight = dataArray[i]
    canvasCtx.save()
    canvasCtx.translate(canvas.width/2, canvas.height/2);
    canvasCtx.rotate(i + Math.PI * 2/bufferLength)
    hue = plainOrRainbow.value === 'true' ? hue : hue * 5
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(0, 0, barWidth, barHeight);
    xPos += barWidth;
    canvasCtx.restore();
  }
}