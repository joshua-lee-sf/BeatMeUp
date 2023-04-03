//canvas setup
const canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
canvas.width = window.innerHeight; //might change
canvas.height = window.innerWidth; // might change

//audio set up
let audioSource;
let analyzer;
let audioElementSrc;

function circularVisualize(){
    const audioContext = new AudioContext();
    const audioElement = document.getElementById('audio-element');
    audioElement.src = 123; //change this to the audio source of the element? Maybe in another function?
    audioSource = audioContext.createMediaElementSource(audioElement);
    analyzer = audioContext.createAnalyser();
    audioSource.connect(audioContext.destination);
    audioSource.connect(analyzer);
    analyzer.fftSize = 65; 
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
    barHeight = dataArray[i]
    canvasCtx.save()
    canvasCtx.translate(canvas.width/2, canvas.height/2);
    canvasCtx.rotate(i + Math.PI * 2/bufferLength)
    let plainOrRainbow = document.getElementById('rainbow')
    let hue = plainOrRainbow.value ? document.getElementById('hue-slider').value : document.getElementById('hue-slider').value * 5
    const saturation = document.getElementById('saturation-slider').value;
    const lightness = document.getElementById('lightness-slider').value;
    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    canvasCtx.fillRect(0, 0, barWidth, barHeight);
    xPos += barWidth;
    canvasCtx.restore();
  }
}
