import ListMusic from "./Class/ListMusic.js";
import {elementVolDown, elementVolHigh, elementInputFile} from "./variabes.js";
import {
  setVolumeMusic,
  loadFiles,
  createListMusic
} from "./Function/music.js";
import {hiddenPlay} from "./Function/music-icons.js"

/* Variaveis */
const LIST_MUSICS = new ListMusic();
let playing = false;
let volume = 1;

const updateListMusic = (event) =>{
  LIST_MUSICS.setList(loadFiles(event));
  createListMusic(LIST_MUSICS);
};

const updateVolume = (value) => volume =  setVolumeMusic(value, elementValueVolume);

const addOnclickElements = () => {
//   elementPlay.onclick = () => changePlaying(playing);
//   elementPause.onclick = changePlaying;
//   elementBackwardPrevious.onclick = previous;
//   elementBackwardNext.onclick = next;
    elementVolDown.onclick = () => updateVolume(volume - 0.1);
    elementVolHigh.onclick = () => updateVolume(volume + 0.1);
    elementInputFile.onchange = (event) => updateListMusic(event);
}
/* Inicia script */
const start = () => {
  addOnclickElements();
  hiddenPlay();
};

start();
