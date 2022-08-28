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

