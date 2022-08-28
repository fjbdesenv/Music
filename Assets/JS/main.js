import ListMusic from "./Class/ListMusic.js";
import Music from "./Class/Music.js";
import {
  getElementId,
  setVolumeMusic,
  loadFiles
} from "./Function/Funcition.js";

/* Variaveis */
const LIST_MUSICS = new ListMusic();
let playing = false;
let volume = 1;

/* Obter elementos HTML (Tags) */
const [
  elementPlay,
  elementPause,
  elementBackwardPrevious,
  elementBackwardNext,
  elementVolDown,
  elementVolHigh,
  elementInputFile,
  elementValueVolume,
  elementNameMusic,
  elementListMusic,
] = [
  getElementId("play"),
  getElementId("pause"),
  getElementId("previous"),
  getElementId("next"),
  getElementId("volume-down"),
  getElementId("volume-high"),
  getElementId("real-input"),
  getElementId("value-volume"),
  getElementId("music-name"),
  getElementId("music-list-ul"),
];

const updateListMusic = (event) => LIST_MUSICS.setList(loadFiles(event));
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
};

start();
