import { Music, ListMusic } from "./../Class/index.js";
import {
  elementAudio,
  elementListMusic,
  elementNameMusic,
  elementTimeCurrent,
  elementTimeDuration,
  LIST_MUSICS,
} from "./../Variabes/variabes.js";

export const setNameMusic = (name) => {
  elementNameMusic.innerHTML = name;
};

export const selectMusicHTML = (newPosition) => {
  const CURRENT_POSITION = localStorage.getItem("current_music");
  const LIST_HTML = document.querySelectorAll(".music-list-li");
  if (CURRENT_POSITION)
    LIST_HTML[CURRENT_POSITION].classList.remove("music-select");
  LIST_HTML[newPosition].classList.add("music-select");
};

export const selectMusic = (music, position) => {
  setNameMusic(music.name);
  startMusic(position);
  selectMusicHTML(position);
  localStorage.setItem("current_music", position);
  updateCurrentMusic();
};

const createItemList = (music, position) => {
  const itemHTML = document.createElement("li");

  itemHTML.id = position;
  itemHTML.setAttribute("class", "music-list-li m5 p10");
  itemHTML.innerHTML = music.name;
  itemHTML.addEventListener("click", () => selectMusic(music, position));

  return itemHTML;
};

export const loadFiles = (event) => {
  let listMusic = new ListMusic();
  for (const file of event.target.files) {
    listMusic.add(new Music(file.name, file));
  }

  return listMusic;
};

export const createListMusic = (list) => {
  if (list instanceof ListMusic) {
    let listMusic = list.getList().list;

    elementListMusic.innerHTML = "";

    for (const position in listMusic) {
      elementListMusic.appendChild(
        createItemList(listMusic[position], position)
      );
    }

    return true;
  }
  return false;
};

export const startMusic = (position) => {
  loadMusic(LIST_MUSICS.getList().list[position].getFile());
};

export const formatTime = (seconds) => {
  let newSeconds, minutes;

  if (seconds >= 60) {
    if (seconds % 60 >= 30) minutes = (seconds / 60).toFixed(0) - 1;
    else minutes = (seconds / 60).toFixed(0);
    newSeconds = seconds % 60;
  } else {
    minutes = "00";
    newSeconds = seconds;
  }

  if (newSeconds == 0) newSeconds = "00";
  else if (newSeconds < 10) newSeconds = "0" + newSeconds;

  if (minutes == 0) minutes = "00";
  else if (minutes < 10) minutes = "0" + minutes;

  return `${minutes}:${newSeconds}`;
};

export const setTimesMusic = (currentMucic, duration) => {
  elementTimeCurrent.innerText = currentMucic;
  elementTimeDuration.innerText = duration;
};

export const previousMusic = () => {
  let position = Number(localStorage.getItem("current_music")) - 1;
  if (position >= 0 && position < LIST_MUSICS.getList().list.length) {
    let music = LIST_MUSICS.getList().list[position];
    selectMusic(music, position);
  }
};

export const nextMusic = () => {
  let position = Number(localStorage.getItem("current_music")) + 1;
  if (position >= 0 && position < LIST_MUSICS.getList().list.length) {
    let music = LIST_MUSICS.getList().list[position];
    selectMusic(music, position);
  }
};

export const updateCurrentMusic = () => {
  let currentTime = 0;

  let interval = setInterval(() => {
    let duration = Number(elementAudio.duration).toFixed(0);

    
    if (Number(localStorage.getItem("play")) == 1) {
      currentTime++;
    }

    setTimesMusic(formatTime(currentTime), formatTime(duration));

    if (currentTime != Number(localStorage.getItem("current_music"))) {
      for(let i = 0; i < interval; i++) clearInterval(i);
    }

    if (currentTime >= duration) {
      clearInterval(interval);
      nextMusic();
    }
  }, 1000);
};

export const loadMusic = (file) => {
  
  elementAudio.src = URL.createObjectURL(file);
  elementAudio.load();
  playMusic();
};

export const playMusic = () => {
  elementAudio.play();
  localStorage.setItem("play", 1);
};

export const pauseMusic = () => {
  elementAudio.pause();
  localStorage.setItem("play", 0);
};
