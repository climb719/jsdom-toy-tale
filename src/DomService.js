class DomService {

    get addBtn() {
        return document.querySelector("#new-toy-btn");
        //making it a function, grabs it from DOM every time 
        //b/c innerHTML += creates copies, this helps protect from bugs
    } 

    get toyFormContainer() {
        return document.querySelector(".container");
    }

    get form() {
        return document.querySelector(".add-toy-form")
    }

    get toyCollection() {
        return document.querySelector("#toy-collection")
    }


}