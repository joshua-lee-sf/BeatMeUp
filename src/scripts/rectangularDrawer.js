let hue = document.getElementById('hue-slider').value;
let saturation = document.getElementById('saturation-slider').value;
let lightness = document.getElementById('lightness-slider').value;
let plainOrRainbow = document.getElementById('rainbow');

function rectangleDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  for (let i = 0; i < bufferLength; i++){
    hue = plainOrRainbow.value ? hue : hue * 5;
    barHeight = dataArray[i]
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}

