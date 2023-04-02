function barVisualizer(){
  const audioContext = new AudioContext();
  const audioElement = document.getElementById('audio-element');
  audioElement.src = 123; //change this to the audio source of the element? Maybe in another function?
  audioElement.play();
  audioSource = audioContext.createMediaElementSource(audioElement);
  analyzer = audioContext.createAnalyser();
  audioSource.connect(audioContext.destination);
  audioSource.connect(analyzer);
  analyzer.fftSize = 64; //add user input for the number of bars?
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = canvas.width/bufferLength
  let barHeight;
  let xPos;
  
  function animation(){
    xPos = 0;
    canvasCtx.clearRect(0,0,canvas.width, canvas.height)
    analyzer.getByteFrequency(dataArray);
    drawer(bufferLength, xPos, barWidth, barHeight, dataArray);
    requestAnimationFrame(animation);
  }

  animation();
}

function drawer(bufferLength, xPos, barWidth, barHeight, dataArray){
  for (let i = 0; i < bufferLength; i++){
    const hue = document.getElementById('hue-slider').value;
    const saturation = document.getElementById('saturation-slider').value;
    const lightness = document.getElementById('lightness-slider').value;
    barHeight = dataArray[i]
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);
    xPos += barWidth;
  }
}
