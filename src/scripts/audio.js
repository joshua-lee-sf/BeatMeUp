const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json' ;

function randomIdFinder(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
};

export async function fetchJamendoSound() {
  let jamendoID = randomIdFinder(10, 250100);
  const jamendoAPI = `https://api.jamendo.com/v3.0/tracks?client_id=096b8c72&id=${jamendoID}` ;
  try{
    let res = await fetch(jamendoAPI);
    let body = await res.json();
    if (body.results.length === 1) {
      body.results[0].audio
    } else {
      return await fetchJamendoSound();
    };
    }
    catch (err) {
    console.log(err)
  };
}


async function fetchYoutubeSound() {
  const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json';
  try {
    let res = await fetch(youtubeAPI);
    let body = await res.json();
    let randomId = randomIdFinder(0, 5142);
    let youtubeSoundKey = body.arr[randomId];
    console.log(body.map[youtubeSoundKey])
  } catch (error) {
    console.log(error)
  }
}


async function fetchFreeSound(){
  let freeSoundId = randomIdFinder(6, 682339)
  const freeSoundAPI = `https://freesound.org/apiv2/sounds/${freeSoundId}?token=pLZSsTz8kCtXTr1kK5S7IZ6byp7rnridddAgiPqL`
  try {
    let res = await fetch(freeSoundAPI)
    let body = await res.json();
    let source = body.previews['preview-hq-mp3'];
  } catch (error) {
    console.log(error)
  }
}