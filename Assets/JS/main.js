import {elementPlay, elementPause, elementPrevious, elementNext, elementVolDown, elementVolHigh, elementValueVolume, elementInputFile} from "./variabes.js";
import {hiddenPlay, setVolumeMusic, showPlay} from "./Function/music-controller.js";
import {LIST_MUSICS} from "./variabes.js" ;
import {loadFiles, createListMusic, playMusic, pauseMusic, previousMusic, nextMusic} from "./Function/music.js";

/* Variaveis */

const updateListMusic = (event) => {
  LIST_MUSICS.setList(loadFiles(event));
  createListMusic(LIST_MUSICS);
};

const play = () =>{
  hiddenPlay();
  playMusic();
}

const pause = () =>{
  showPlay();
  pauseMusic();
}

const previous = () =>{
  previousMusic();
}

const next = () =>{
  nextMusic();
}

const updateVolume = (value) =>{
  let volume = setVolumeMusic(value, elementValueVolume);
  localStorage.setItem("volume", volume);
}

const addOnclickElements = () => {
  elementPlay.onclick = play;
  elementPause.onclick = pause;
  elementPrevious.onclick = previous;
  elementNext.onclick = next;
  elementVolDown.onclick = () => updateVolume(Number(localStorage.getItem("volume")) - 10);
  elementVolHigh.onclick = () => updateVolume(Number(localStorage.getItem("volume")) + 10);
  elementInputFile.onchange = (event) => updateListMusic(event);
};


const startLocalStorage = () => {
  localStorage.setItem("current_music", 0);
  localStorage.setItem("volume", 100);
};

/* Inicia script */
const start = () => {
  addOnclickElements();
  startLocalStorage();
  hiddenPlay();
};

start();
