import { elementPlay, elementPause, elementAudio } from "./../Variabes/variabes.js";

export const showPlay = () => {
  elementPlay.classList.remove("hidden");
  elementPause.classList.add("hidden");
};

export const hiddenPlay = () => {
  elementPlay.classList.add("hidden");
  elementPause.classList.remove("hidden");
};

export const setVolumeMusic = (value, element) => {
  if (value >= 0) {
    if (value <= 100) {
      element.innerHTML = `${value} %`;
      elementAudio.volume = Number(value/100);
      return Number(value);
    }
    return Number(value) - 10;
  }
  return Number(value) + 10;
};
