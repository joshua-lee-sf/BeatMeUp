
let hue = document.getElementById('hue-slider').value;
let saturation = document.getElementById('saturation-slider').value;
let lightness = document.getElementById('lightness-slider').value;
let plainOrRainbow = document.getElementById('rainbow');

function circularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  for (let i = 0; i < bufferLength; i++){
    barHeight = dataArray[i]
    canvasCtx.save()
    canvasCtx.translate(canvas.width/2, canvas.height/2);
    canvasCtx.rotate(i + Math.PI * 2/bufferLength)
    hue = plainOrRainbow.value ? hue : hue * 5
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(0, 0, barWidth, barHeight);
    xPos += barWidth;
    canvasCtx.restore();
  }
}