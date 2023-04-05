window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
window.canvas.width = window.innerWidth; //might change
window.canvas.height = window.innerHeight; // might change

const barSize = document.getElementById('size');
let barMultipler;
barSize.addEventListener('input', function(){
  barMultipler = barSize.value;
})

const hue = document.getElementById('hue-slider');
let hueValue;
hue.addEventListener('input', function(){
  hueValue = parseInt(hue.value);
  // circularDrawer
})

const saturation = document.getElementById('saturation-slider');
let saturationValue;
saturation.addEventListener('input', function(){
  saturationValue = parseInt(saturation.value);
  // circularDrawer
})


const lightness = document.getElementById('lightness-slider');
let lightnessValue;
lightness.addEventListener('input', function(){
  lightnessValue = parseInt(lightness.value);
  // circularDrawer
})

const plainOrRainbowArray = document.getElementsByName('rainbow-bool');
const rainbowBoolFalse = document.getElementById('rainbow-f');
const rainbowBoolTrue = document.getElementById('rainbow-t');
let plainOrRainbowValue;

rainbowBoolTrue.addEventListener('input', function(e){
  plainOrRainbowArray.forEach(option => {
    if (option.checked) {
      plainOrRainbowValue = option.value
    }
  });
})

rainbowBoolFalse.addEventListener('input', function(e){
  plainOrRainbowArray.forEach(option => {
    if (option.checked) {
      plainOrRainbowValue = option.value
    }
  });
})

export function circularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  console.log('drawing');
  for (let i = 0; i < bufferLength; i++){
    barHeight = dataArray[i] * barMultipler
    canvasCtx.save()
    canvasCtx.translate(canvas.width/2, canvas.height/2);
    canvasCtx.rotate(i + Math.PI * 2/bufferLength)
    let hueCode = plainOrRainbowValue === 'false' ? hueValue : hueValue * i * 5;
    canvasCtx.fillStyle = 'hsl(' + hueCode + ', ' + saturationValue + '%, ' + lightnessValue + '%)';
    canvasCtx.fillRect(0, 0, barWidth, barHeight);
    xPos += barWidth;
    canvasCtx.restore();
  }
}

export function rectangularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  console.log('drawing');
  for (let i = 0; i < bufferLength; i++){
    let hueCode = plainOrRainbowValue === 'false' ? hueValue : hueValue * i;
    barHeight = dataArray[i] * barMultipler
    canvasCtx.fillStyle = 'hsl(' + hueCode + ', ' + saturationValue + '%, ' + lightnessValue + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}