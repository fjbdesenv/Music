import Music from "./Music.js";

export default class ListMusic{   
    constructor(){
        this.list = new Array();
    }

    /* Gets */
    getList(){
        return this.list;
    }

    /* Sets */
    setList(list){
        return this.list = list;
    }

    /* Outras funçoes */
    add(music){
        if(music instanceof Music){
            this.list.push(music);
            return true;
        }
        return false;
    }
    
    remove(position){
        if(typeof position == 'number'){
            if(position > 0 && position < this.list.length)
            this.list.splice(position, 1);
            return true;    
        }
        return false;
    }
}