import { circularDrawer } from "./circularDrawer";
import { rectangularDrawer } from "./rectangularDrawer";

function reVisualizer(drawerFunc = visualizerShapeSelector.value === 'rectangle' ? rectangularDrawer : circularDrawer){
  if(audioSource !== null) {
    audioSource.disconnect();
  }
  audioSource.connect(audioContext.destination)
  analyzer = audioContext.createAnalyser();
  audioSource.connect(analyzer);
  analyzer.fftSize = fftSizeValue;
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = canvas.width/(Math.floor(bufferLength - 5))
  let barHeight;
  let xPos;
  
  function animation(){
      xPos = 0;
      canvasCtx.clearRect(0,0,canvas.width, canvas.height)
      analyzer.getByteFrequencyData(dataArray);
      drawerFunc(bufferLength, xPos, barWidth, barHeight, dataArray);
      requestAnimationFrame(animation);
  }

  animation();
}