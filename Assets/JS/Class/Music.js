export default class Music{   
    /* Construtor */
    constructor(name, file){
        this.name = name;
        this.file = this.convertFileAudio(file); 
    }

    /* Gets */
    getName() {
        return this.name;
    }
    getFile() {
        return this.file;
    }

    /* Sets */
    setName(name) {
        this.name = name;
    }
    setFile(file) {
        this.file = file;
    }

    convertFileAudio(file){
        if(file instanceof File){
            return new Audio(URL.createObjectURL(file));
        }
    }
}