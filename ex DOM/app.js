function Carrousel(tab, id){

    this.tab = tab;
    this.id = id;
    let iddiv = document.getElementById(this.id)

    let indexActuel = 0;
    let img= document.createElement("img");
    img.setAttribute("src", tab[indexActuel])
    img.setAttribute("alt", "img carrousel")
    iddiv.appendChild(img);

    this.suivant = function(){
        if(indexActuel+1 >= tab.length)
        {
            console.log("test")
            indexActuel = 0;
        }
        else{
            indexActuel += 1;

        }
        this.update();

    };

    this.precedent = function(){
        if(indexActuel-1 < 0)
        {
            console.log("test")
            indexActuel = tab.length-1;
            console.log(indexActuel)
        }
        else{
            indexActuel -= 1;

        }
        this.update();
    };

    this.update = function(){
        img.setAttribute("src", tab[indexActuel])
    }
}
let tableauimg = ["img/1.jpg", "img/2.png", "img/3.jpg", "img/4.webp"]
let iddiv = document.getElementById("test")

let tab = new Carrousel(tableauimg,"test");


const preced = document.getElementById("previous");
const suiv = document.getElementById("next");

preced.addEventListener("click", ()=>tab.precedent());
suiv.addEventListener("click", ()=>tab.suivant());