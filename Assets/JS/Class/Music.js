export default class Music{   
    /* Construtor */
    constructor(name, file){
        this.name = name;
        file instanceof File ? this.file = file : this.file; 
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
}