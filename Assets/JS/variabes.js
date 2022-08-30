import {getElementId} from "./Function/Funcition.js"

/* Obter elementos HTML (Tags) */
export const [
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