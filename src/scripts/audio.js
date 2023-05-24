let audioElement = document.getElementById('audio-element')
// audioElement.crossOrigin = 'anonymous';

const file = document.getElementById('music-upload')
file.addEventListener('change', function(){
  let files = this.files
  audioElement.src = URL.createObjectURL(files[0]);
  audioElement.load();
})

function randomIdFinder(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
};

export async function fetchJamendoSound() {
  let jamendoID = randomIdFinder(10, 250100);
  try{
    let res = await fetch(`https://beatmeupproxy.onrender.com/jamendosound?id=${jamendoID}`);
    let body = await res.json();
    if (body.results.length === 1) {
      audioElement.src = body.results[0].audio;
    } else {
      return await fetchJamendoSound();
    };
    }
    catch (err) {
    console.log(err)
  };
}

export async function fetchYoutubeSound() {
  const youtubeAPI = 'https://beatmeupproxy.onrender.com/youtubesound';  
  try {
    let res = await fetch(youtubeAPI);
    let body = await res.json();
    let randomId = randomIdFinder(0, 5142);
    let youtubeSoundKey = body.arr[randomId];
    console.log(body.map[youtubeSoundKey])
    let res2 = await fetch(`https://beatmeupproxy.onrender.com/youtubesounds?url=${encodeURIComponent(body.map[youtubeSoundKey])}`);
    let body2 = await res2.blob()
    audioElement.src = URL.createObjectURL(body2)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchFreeSound(){
  let freeSoundId = randomIdFinder(6, 682339)
  const freeSoundAPI = `https://beatmeupproxy.onrender.com/freesound?id=${freeSoundId}`
  try {
    let res = await fetch(freeSoundAPI)
    let body = await res.json();
    audioElement.src = body.previews['preview-hq-mp3'];
  } catch (error) {
    console.log(error)
  }
}


// audio controls feature to be added later
// const playButton = document.getElementById('playbutton')

// playButton.addEventListener('click', function(){
  
//   if (AudioContext.state === 'suspended') {
//     AudioContext.resume();
//   }

//   if (playButton.dataset.playing === 'false') {
//     audioElement.play()
//     playButton.dataset.playing = 'true'
//     let playImage = document.createElement('img')
//     playButton.appendChild(playImage)
//   } else if (playButton.dataset.playing === 'true') {
//     audioElement.pause();
//     playButton.dataset.playing = 'false'
//   }
//   false;
// })