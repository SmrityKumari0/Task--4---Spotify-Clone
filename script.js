console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.aaya.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aaya Re Toofan", filePath: "songs/1.aaya.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kho Gye", filePath: "songs/2.KhoGye.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mere Liye", filePath: "songs/17.Mere Liye.mp3", coverPath: "covers/17.jpg"},
    {songName: "Ishq", filePath: "songs/3.Ishq.mp3", coverPath: "covers/3.jpg"},
    {songName: "Nhi Milta", filePath: "songs/4.NhiMilta.mp3", coverPath: "covers/4.jpg"},
    {songName: "Sage", filePath: "songs/5.Sage.mp3", coverPath: "covers/5.jpg"},
    {songName: "People", filePath: "songs/6.people.mp3", coverPath: "covers/6.jpg"},
    {songName: "At My Worst", filePath: "/7.At my Worst.mp3", coverPath: "covers/7.jpg"},
    {songName: "My Universe", filePath: "songs/8.My Universe.mp3", coverPath: "covers/8.jpg"},
    {songName: "Euphoria", filePath: "songs/9.Euphoria.mp3", coverPath: "covers/9.jpg"},
    {songName: "Night Changes", filePath: "songs/10.NightChanges.mp3", coverPath: "covers/10.jpg"},
    {songName: "Reckless", filePath: "songs/11.Reckless-Madison-Beer.mp3", coverPath: "covers/11.jpg"},
    {songName: "Thousands years", filePath: "songs/12.Thousand years.mp3", coverPath: "covers/12.jpg"},
    {songName: "We don't talk anymore", filePath: "songs/13.We dont talk anymore.mp3", coverPath: "covers/13.jpg"},
    {songName: "Give me your Forever", filePath: "songs/14.Give me your Forever.mp3", coverPath: "covers/14.jpg"},
    {songName: "Pink Venom", filePath: "songs/15.Pink Venom.mp3", coverPath: "covers/15.jpg"},
    {songName: "Stay with me", filePath: "songs/16.Stay with me.mp3", coverPath: "covers/16.jpg"},
    
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}) 
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
  
//Listens to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('input', ()=>{
     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//        makeAllPlays();
//        e.target.classList.remove('fa-play-circle');
//        e.target.classList.add('fa-pause-circle');
//        audioElement.src = 'songs/3.mp3';
//        audioElement.currentTime = 0;
//        audioElement.play();
     
//         })
// })

