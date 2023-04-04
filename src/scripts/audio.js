let audioElement = document.getElementById('audio-element')
// audioElement.crossOrigin = 'anonymous';

function randomIdFinder(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
};

export async function fetchJamendoSound() {
  let jamendoID = randomIdFinder(10, 250100);
  console.log('picking song');
  try{
    let res = await fetch(`http://localhost:5000/jamendosound?id=${jamendoID}`);
    let body = await res.json();
    // console.log(body.results);
    if (body.results.length === 1) {
      let audioSource = await fetch(`http://localhost:5000/jamendogetsound?url=${body.results[0].audio}`)
    } else {
      return await fetchJamendoSound();
    };
    }
    catch (err) {
    console.log(err)
  };
}

export async function fetchYoutubeSound() {
  const youtubeAPI = 'http://localhost:5000/youtubesound';
  console.log('picking song');
  try {
    let res = await fetch(youtubeAPI);
    let body = await res.json();
    let randomId = randomIdFinder(0, 5142);
    let youtubeSoundKey = body.arr[randomId];
    audioElement.src = body.map[youtubeSoundKey]
  } catch (error) {
    console.log(error)
  }
}

export async function fetchFreeSound(){
  let freeSoundId = randomIdFinder(6, 682339)
  const freeSoundAPI = `http://localhost:5000/freesound?id=${freeSoundId}`
  console.log('picking song');
  try {
    let res = await fetch(freeSoundAPI)
    let body = await res.json();
    audioElement.src = body.previews['preview-hq-mp3'];
  } catch (error) {
    console.log(error)
  }
}