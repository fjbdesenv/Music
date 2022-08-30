
import ListMusic from "../Class/ListMusic.js";
import Music from "../Class/Music.js";
import {elementListMusic, elementNameMusic} from "../variabes.js";

/* Variaveis */
let LIST_MUSICS, position;

export const getElementId = (id) => document.getElementById(id);

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
    elementNameMusic.innerHTML = LIST_MUSICS[position].name;
};
  

const selectMusic = (i) => {
    position = i;
    setNameMusic(position);
};

const createItemList = (music, i) => {

    const itemHTML = document.createElement("li");

    itemHTML.id = i;
    itemHTML.setAttribute("class", "music-list-li m5 p10");
    itemHTML.innerHTML = music.name;
    itemHTML.addEventListener("click", () => selectMusic(i));

    return itemHTML;
};


export const createListMusic = (listMusic) =>{
    if(listMusic instanceof ListMusic){
        LIST_MUSICS = listMusic.getList().list; 

        elementListMusic.innerHTML = "";
        
        for (const i in LIST_MUSICS){
            elementListMusic.appendChild(createItemList(LIST_MUSICS[i], i));
        }
        
        return true;
    }
    return false;
}
