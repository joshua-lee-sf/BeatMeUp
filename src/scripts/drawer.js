const canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
canvas.width = canvas.clientWidth; //might change
canvas.height = canvas.clientHeight; // might change

const barSize = document.getElementById('size');
let barMultipler;
barSize.addEventListener('input', function(){
  barMultipler = barSize.value;

})

const hue = document.getElementById('hue-slider');
let hueValueDisplay = document.getElementById('hue-value')
let hueValue = parseInt(hue.value);
hue.addEventListener('input', function(){
  hueValue = parseInt(hue.value);
  hueValueDisplay.innerHTML = hue.value
})

const saturation = document.getElementById('saturation-slider');
const saturationValueDisplay = document.getElementById('saturation-value')
let saturationValue = parseInt(saturation.value);
saturation.addEventListener('input', function(){
  saturationValue = parseInt(saturation.value);
  saturationValueDisplay.innerHTML = saturation.value
})


const lightness = document.getElementById('lightness-slider');
const lightnessDisplayValue = document.getElementById('lightness-value')
let lightnessValue = parseInt(lightness.value);
lightness.addEventListener('input', function(){
  lightnessValue = parseInt(lightness.value);
  lightnessDisplayValue.innerHTML = lightness.value
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
  for (let i = 0; i < bufferLength; i++){
    let hueCode = plainOrRainbowValue === 'false' ? hueValue : hueValue * i;
    barHeight = dataArray[i] * barMultipler
    canvasCtx.fillStyle = 'hsl(' + hueCode + ', ' + saturationValue + '%, ' + lightnessValue + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}