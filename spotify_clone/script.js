console.log("Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "It's Always Blue - Legion", filePath: "songs/1.mp3", coverPath: "images/covers/1.jpg" },

    { songName: "Trap - Cartel", filePath: "songs/2.mp3", coverPath: "images/covers/2.jpg" },

    { songName: "They Mad - Lowkey Pesci", filePath: "songs/3.mp3", coverPath: "images/covers/3.jpg" },

    { songName: "Rich the kid - Plug Walk", filePath: "songs/4.mp3", coverPath: "images/covers/4.jpg" },

    { songName: "Don't know - Unknown", filePath: "songs/5.mp3", coverPath: "images/covers/5.jpg" },

    { songName: "Sleeping at last - Saftey Dance", filePath: "songs/6.mp3", coverPath: "images/covers/6.jpg" },

    { songName: "Back it up - Anonymous", filePath: "songs/7.mp3", coverPath: "images/covers/7.jpg" },

    { songName: "Random - Random Artist", filePath: "songs/8.mp3", coverPath: "images/covers/8.jpg" },

    { songName: "Doesn't matter - Who knows", filePath: "songs/9.mp3", coverPath: "images/covers/9.jpg" },

    { songName: "True Love - Lie", filePath: "songs/10.mp3", coverPath: "images/covers/10.jpg" }
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {

        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);

        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})



