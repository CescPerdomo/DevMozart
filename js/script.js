const keys = document.querySelectorAll(".key");

const whiteKeys = document.querySelectorAll(".key.white");

const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click",handleKeyClick));

function handleKeyClick(){
    playKey(this);
}

function playKey(key){

const keyAudio = document.getElementById(key.dataset.note);
    
keyAudio.currentTime = 0;
    
keyAudio.play();

key.classList.add("active");

keyAudio.addEventListener("ended", ()=>{

key.classList.remove("active");
    });
}

//funcion para subir y bajar volumen

const volumeControl = document.getElementById('volume');
   
const audioElements = document.querySelectorAll('audio');

volumeControl.addEventListener('input', (e) => {
    
const volume = parseFloat(e.target.value);
   
audioElements.forEach(audio => {
   
audio.volume = volume;
    });
});