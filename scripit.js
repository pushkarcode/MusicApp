console.log("welcome to MusicApp");

//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Bekhayali - Kabirsingh",filePath: "song/1.mp3", coverPath: "cover/cover1.jpeg"},
    {songName: "Pwansut - Narci",filePath: "song/2.mp3", coverPath: "cover/cover2.jpeg"},
    {songName: "BlueEyes - YO YO HoneySingh",filePath: "song/3.mp3", coverPath: "cover/cover3.jpeg"},
    {songName: "HeatWaves - band Glass Animals",filePath: "song/4.mp3", coverPath: "cover/cover4.jpeg"},
    {songName: "Dangal - PritamDa ",filePath: "song/5.mp3", coverPath: "cover/cover5.jpeg"},
    {songName: "Thujekitna chahne  - jubinnityan",filePath: "song/6.mp3", coverPath: "cover/cover6.jpeg"},
    {songName: "Ja nisar - ArjitSingh",filePath: "song/7.mp3", coverPath: "cover/cover7.jpeg"},
    {songName: "Ramsitu - Narci",filePath: "song/8.mp3", coverPath: "cover/cover8.jpeg"},
    {songName: "Beliver - Imagine Dragons",filePath: "song/9.mp3", coverPath: "cover/cover9.jpeg"},
    {songName: "TheseDays - Sidhu Moose Wala",filePath: "song/10.mp3", coverPath: "cover/cover10.jpeg"},
] 

songItem.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src =  song[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})   

//audioElement.play();
 
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
 
//Update Seelbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
      
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlay();

    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })


document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })