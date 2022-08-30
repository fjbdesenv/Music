import {elementListMusic} from "./../variabes.js";
import {ListMusic} from "./../Class/index.js";
import {setNameMusic} from "./music-name.js";
import { play } from "./music.js";

/* Variaveis */
let currentPosition;


const selectMusicHTML = (newPosition) => {
    const LIST_HTML = document.querySelectorAll(".music-list-li");
    if(currentPosition) LIST_HTML[currentPosition].classList.remove("music-select");
    LIST_HTML[newPosition].classList.add("music-select");
}

const selectMusic = (music, position) => {    
    setNameMusic(music.name);
    play(position);
    selectMusicHTML(position);
    currentPosition = position;
};

const createItemList = (music, position) => {

    const itemHTML = document.createElement("li");

    itemHTML.id = position;
    itemHTML.setAttribute("class", "music-list-li m5 p10");
    itemHTML.innerHTML = music.name;
    itemHTML.addEventListener("click", () => selectMusic(music, position));

    return itemHTML;
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
