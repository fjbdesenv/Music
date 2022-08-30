
import ListMusic from "../Class/ListMusic.js";
import Music from "../Class/Music.js";
import {elementListMusic, elementNameMusic} from "./../variabes.js";
import {showPlay, hiddenPlay} from "./music-icons.js";

/* Variaveis */
let listMusic, currentPosition;


export const setVolumeMusic = (value, element) =>{
    if(value >= 0){
        if(value <= 1){
            element.innerHTML = `${value.toFixed(1) * 100}%`;
            return value;
        }
        return value - 0.1;
    }
    return  value + 0.1;
};

export const loadFiles = (event) => {
    let listMusic = new ListMusic();
    for (const file of event.target.files){
        listMusic.add(new Music(file.name, file));
    }

    return listMusic;
};

const setNameMusic = (position) => {
    elementNameMusic.innerHTML = listMusic[position].name;
};  

const play = (position) => {
    showPlay();
}


const selectMusic = (position) => {
    
    setNameMusic(position);
    play(position);

    currentPosition = position;
};

const createItemList = (music, position) => {

    const itemHTML = document.createElement("li");

    itemHTML.id = position;
    itemHTML.setAttribute("class", "music-list-li m5 p10");
    itemHTML.innerHTML = music.name;
    itemHTML.addEventListener("click", () => selectMusic(position));

    return itemHTML;
};


export const createListMusic = (list) =>{
    if(list instanceof ListMusic){
        listMusic = list.getList().list; 

        elementListMusic.innerHTML = "";
        
        for (const position in listMusic){
            elementListMusic.appendChild(createItemList(listMusic[position], position));
        }
        
        return true;
    }
    return false;
}
