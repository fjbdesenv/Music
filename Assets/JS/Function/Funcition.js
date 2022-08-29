import ListMusic from "../Class/ListMusic.js";
import Music from "../Class/Music.js";

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


const createItemList = (music, position) => {

    const itemHTML = document.createElement("li");

    itemHTML.id = position;
    itemHTML.classList.add("music-list-li");
    itemHTML.classList.add("m5");
    itemHTML.classList.add("p10");
    itemHTML.innerHTML = music.name;

    return itemHTML;
};


export const createListMusic = (elementListMusic, listMusic) =>{
    if(listMusic instanceof ListMusic && elementListMusic instanceof HTMLElement){
        const LIST_MUSICS = listMusic.getList().list; 

        elementListMusic.innerHTML = "";

        for (const position in LIST_MUSICS){
            elementListMusic.appendChild(createItemList(LIST_MUSICS[position], position));
        }
        
        return true;
    }
    return false;
}
