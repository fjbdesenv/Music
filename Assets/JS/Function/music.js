import {Music, ListMusic} from "../Class/index.JS";
import {elementAudio, elementListMusic, elementNameMusic, LIST_MUSICS} from "./../variabes.js";

export const setNameMusic = (name) => {
    elementNameMusic.innerHTML = name;
};

export const selectMusicHTML = (newPosition) => {
    const CURRENT_POSITION = localStorage.getItem("current_music");
    const LIST_HTML = document.querySelectorAll(".music-list-li");
    if(CURRENT_POSITION) LIST_HTML[CURRENT_POSITION].classList.remove("music-select");
    LIST_HTML[newPosition].classList.add("music-select");
}

export const selectMusic = (music, position) => {
    
    console.log("Music = " + music);
    console.log("position = " + position);    
    
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
    for (const file of event.target.files){
        listMusic.add(new Music(file.name, file));
    }

    return listMusic;
};

export const createListMusic = (list) =>{
    if(list instanceof ListMusic){
        let listMusic = list.getList().list; 

        elementListMusic.innerHTML = "";
        
        for (const position in listMusic){
            elementListMusic.appendChild(createItemList(listMusic[position], position));
        }
        
        return true;
    }
    return false;
}

export const startMusic = (position) => {
    loadMusic(LIST_MUSICS.getList().list[position].getFile());
}

export const changeEndMusic = (currentTime, duration, interval) => {
    if(currentTime >= duration){

        clearInterval(interval);

        let position = Number(localStorage.getItem("current_music")) + 1;
        let music = LIST_MUSICS.getList().list[position];
        selectMusic(music, position);
    }
}

export const updateCurrentMusic = () => {
    let currentTime = 0;
    
    let interval =  setInterval(()=>{
        let duration = elementAudio.duration;

        currentTime++;
        console.log(currentTime +  " / "+ duration);
        changeEndMusic(currentTime, duration, interval);
    },1000)
}

export const loadMusic = (file) =>{
    elementAudio.src = URL.createObjectURL(file);
    elementAudio.load();
    playMusic();
};

export const playMusic = () =>{
    elementAudio.play();
};

export const pauseMusic = () =>{
    elementAudio.pause();
};