window.canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
window.canvas.width = window.innerWidth; //might change
window.canvas.height = window.innerHeight; // might change

const barSize = document.getElementById('size');
let barMultipler;
barSize.addEventListener('input', function(){
  barMultipler = barSize.value;
})

const hueSliderValue = document.getElementById('hue-value');
const hue = document.getElementById('hue-slider');
let hueValue;
hue.addEventListener('input', function(){
  hueValue = parseInt(hue.value);
  hueSliderValue.innerHTML = hueValue
  // rectangleDrawer
  // console.log('changing hue')
})

const saturationSliderValue = document.getElementById('saturation-value')
const saturation = document.getElementById('saturation-slider');
let saturationValue
saturation.addEventListener('input', function(){
  saturationValue = parseInt(saturation.value);
  saturationSliderValue.innerHTML = saturationValue
  // rectangleDrawer
  // console.log('changing saturation')

})

const lightnessSliderValue = document.getElementById('lightness-value')
const lightness = document.getElementById('lightness-slider');
let lightnessValue;
lightness.addEventListener('input', function(){
  lightnessValue = parseInt(lightness.value);
  lightnessSliderValue.innerHTML = lightnessValue;
  // rectangleDrawer
  // console.log('changing lightness')
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

