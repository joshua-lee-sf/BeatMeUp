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
  console.log('picking song');
  try{
    let res = await fetch(`http://localhost:5000/jamendosound?id=${jamendoID}`);
    let body = await res.json();
    // console.log(body.results);
    if (body.results.length === 1) {
      // let audioSource = await fetch(`http://localhost:5000/jamendogetsound?url=${body.results[0].audio}`)
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
  const youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json';
  console.log('picking song');
  try {
    let res = await fetch(youtubeAPI);
    console.log(res, 'res');
    let body = await res.json();
    console.log(body,'body')
    let randomId = randomIdFinder(0, 5142);
    console.log(randomId, 'randomID')
    let youtubeSoundKey = body.arr[randomId];
    console.log(youtubeSoundKey, 'YTSK')
    // audioElement.src = body.map[youtubeSoundKey]
    audioElement.src = 'https://doc-0g-1k-docs.googleusercontent.com/docs/securesc/3q7qnovr1rhioihsredvoa6pt240dgb4/n37s4j6gngnjsvhcvuh95d5v7puh4bas/1680647925000/09402692664417005610/03510309754382895757/1vxNL4hS4teSCQQbOmRPmLBZEHDUwDLlh?e=open&ax=ALy03A56l1wFBA81yamLJq2mDP3yTDS_9JMnZf4p1vq4LSyLSjUwm77AhOQ3_ZV54neJgeBnS1QoNYX9RyjZb7FwInvzuvhdt4mGI20QxWNuJaELvG9Q0aWSXoBhzWBT9vc0SGk9aF5c-cd68JHqKKKeBqhtWyHJanlQyslRE7GNDSV5qHsiFqORbNwqQkXNan28gn0inNd-NoHYLlRo0dYgKZvMpo7CdyJFVAqxy7SBfFu_YjyDWtT9Brez0dR6Dh70MbYqzXPfC0PqdArANlvufh1Akiq3iEdAjrvy-6NMEIZiKVaHFw4m84eQfovC_M2omjjRQTeMSOrzqe0ZeKASwfxOf08AHCT67L3Wp1zrKZNw2L4h7FBxgo-t6FOVJ0TO0Bt8vV_3IUm-G9aad004lF2hKzBb8JLC1mQWvfUnI_0-mHyNQvZZz4gbtYrpb5uA0FFI9XlcuFsH1UwQVeXPuY02eKQIz7wY1EG-VB7SXkxwNvhLvd2aOrevuJh4R4wdEGGvh8z2AUehDnWpezVXEZkak8BvyFRIcjrxu2DhXVu2JjHFTH9DW6TekadVjAnKFtlw62rX5JLyomtjRPKdlPcicYBBGky5dJ582XWWG2MkLKNNZJE0rbD6zX9jUrtcEk42ksJ5FPtlh8VSawgjqjtjEc_cLeEElTUeRPIx049qZ1T7ZW5xrXJ7svh8CYbRP-XG4HkCswJ2lT_rB2NvnsU4NOhQnP723CeW-i07MuAQOxsMwxrExbu3mbCLHjayO4EZKdBSWb7YM7y6Iqia1pvdQhSI89wtDIy5FMoVan9p0oQQLwqRO0c4U8ArXIsX9pNVoEo61-KId94jHLDKgOy8rbGy-oVW4oHuKeB38vG1v1hlbGLMQRaUy3NyWioksqdmxWIqSx_qtuAWM1PKBbw10qgucQksAI2oRoiddqslT0f77A_ys2f5-0RpD6hnokyCRmxSVWoXxcA806A8gBWUoQX-MJ3FJrfgxkPMdsflvxsod3-sE87d0_2QzDkRDs90HLCnWRZhj-3M_iUUHn9KPbLrRGy-oO68htwaWWH6NrAZBs8dhZYRzal4Yk-F_xuUJrUkQCIEU8SGDQl3-bOfooGCA1Qh6w6jmCNqzKoKwbfw0Dw&uuid=c2f07669-91d0-4c12-87f1-17d7537863ce&authuser=0&nonce=nus4ttju2tt8m&user=03510309754382895757&hash=1b895legopu4at8vrb2q3picgkbjcg30'
    console.log(body.map[youtubeSoundKey], 'ytlink')
  } catch (error) {
    console.log(error)
  }
}

window.fetchYoutubeSound = fetchYoutubeSound

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