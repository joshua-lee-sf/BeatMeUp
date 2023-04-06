# Beat Me Up

Welcome to my app! It's a sound visualizer that analyzes frequencies and other data from sound files. Please check it out [here](https://joshua-lee-sf.github.io/BeatMeUp/)! 😁 (the name is a play on words like Beam Me Up Scotty! But Since it visualizes beats I used Beat Me Up)

# Technologies

Technologies used: `HTML5`, `CCS`, `JavaScript`, `Web Audio API`, `Express`, `Canvas API`, `Free Sounds API`, `Jamendo API`, `Google Audio Library API`

## Instructions

I have instructions on the app itself. But here's a quick rundown:
1. Select the "shape" you want.
2. Select the number of bars you want visualized
3. Select the size of the visualizer
4. Select whether you want the colors to be rainbow or a single color
5. Select the Hue, Saturation Percentage, and Lightness percentage.
   * Here's more [information](https://www.w3schools.com/html/html_colors_hsl.asp) on HSL coloring.
6. There are 2 options for music selection:
   * Choosing a random sound/song from one of 3 provided sources; [Free Sounds](https://freesound.org/), [Jamendo](https://www.jamendo.com/), or [Google Audio Library](https://studio.youtube.com/channel/UCgSo_OPxCbE7OegSt8aukYA/music).
   * Uploading your own song/sound. You can only upload audio files, so files ending with .mp3, .wav, .m4a, .flac, etc.
7. Press play and you'll see the visualizer

## Technical Implementations


## Animating the bars: 
I run this code under an event listener to listen for an `audioElement` to play. If the  `audioElement` is playing, then this code runs. It also takes in consideration the `shape` that was selected ine step 1 in the instructions and runs the specific `drawerFunc` function for the shape.
``` js
export function visualizer(drawerFunc){
  function animation(){
    xPos = 0;
    canvasCtx.clearRect(0,0,canvas.width, canvas.height)
    analyzer.getByteFrequencyData(dataArray);
    drawerFunc(bufferLength, xPos, barWidth, barHeight, dataArray);
    requestAnimationFrame(animation);
  }

  let animate = requestAnimationFrame(animation);

  if (animate) {
    cancelAnimationFrame(animate);
  }

  if(audioContext.state === 'suspended'){
    audioContext.resume();
  }
  
  if(disconnected) {
    audioSource = audioContext.createMediaElementSource(audioElement);
    audioSource.connect(analyzer);
    analyzer.connect(audioContext.destination)
    animation();
    disconnected = false;
  }
  
  animation();
  
  };
```

## Drawer Functions: 
Drawer Function for the `circle` shape selector
```js
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
```

Drawer Function for the `rectangle` shape selector:
```js
export function rectangularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  for (let i = 0; i < bufferLength; i++){
    let hueCode = plainOrRainbowValue === 'false' ? hueValue : hueValue * i;
    barHeight = dataArray[i] * barMultipler
    canvasCtx.fillStyle = 'hsl(' + hueCode + ', ' + saturationValue + '%, ' + lightnessValue + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}
```

## Sound/Song Selector/Uploader Functions:
Code for running the song selectors:
```js
audioAPISelector.addEventListener('input', function(){
  if (audioAPISelector.value === 'jamendoAPI') { 
    generateRandomSound.addEventListener('click', fetchJamendoSound);
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', fetchYoutubeSound)
  } else {
    generateRandomSound.addEventListener('click', fetchFreeSound)
  }
})
```

Code for uploading songs:
```js
const file = document.getElementById('music-upload')
file.addEventListener('change', function(){
  let files = this.files
  audioElement.src = URL.createObjectURL(files[0]);
  audioElement.load();
})
```

# Future Features

Web Audio is such a vast open source API that has a near infinite amount of possible implementations. I'd love to add spatial audio in the future, add more shapes in to the drawer menu, and add even more user customization.