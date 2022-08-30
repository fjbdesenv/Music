import {elementPlay, elementPause} from "../variabes.js";

export const showPlay = () => {
    elementPlay.classList.remove("hidden");
    elementPause.classList.add("hidden");
}

export const hiddenPlay = () => {
    elementPlay.classList.add("hidden");
    elementPause.classList.remove("hidden");
}
