import ListMusic from "./../Class/ListMusic.js";
import { getElementId } from "./../Function/Outhers.js";

/* Obter elementos HTML (Tags) */
export const [
  elementPlay,
  elementPause,
  elementPrevious,
  elementNext,
  elementVolDown,
  elementVolHigh,
  elementInputFile,
  elementValueVolume,
  elementNameMusic,
  elementListMusic,
  elementAudio,
  elementTimeCurrent,
  elementTimeDuration,
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
  getElementId("music-audio"),
  getElementId("time-current"),
  getElementId("time-duration"),
];

export const LIST_MUSICS = new ListMusic();
export let volume;
