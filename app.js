// Ex 1

function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;

    this.conduire = function() {
        res = `La voiture de marque ${marque} modèle ${modele} de l'année ${annee} roule sur la route.`;
        console.log(res);
    }

}

voiture = new Voiture("Toyota", "Camry", 2020);
console.log(voiture);

voiture.conduire();

// Ex 2

voiture2 = new Voiture("Opel", "Agila", 2012);


let garage = {
    tableau : [voiture, voiture2],

    afficherVoitures(){
        console.log(this.tableau);
    }
};

garage.afficherVoitures();


// Ex 3

function Personne(nom, age) {
    this.nom = nom;
    this.age = age;

    this.sePresenter = function() {
        res = `Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`;
        console.log(res);
    }

}

let personne = new Personne("john", 30);
personne.sePresenter();

// Ex 4

// class Etudiant extends Personne{
//     constructor (nom, age, matricule){
//         super(nom, age)
//         this.matricule = matricule
//     }

//     etudier() {
//         res = `L'étudiant ${super.nom} avec le matricule ${this.matricule} étudie pour son examen.`;
//         console.log(res);
//     };
// }

function Etudiant(nom, age, matricule){
    Personne.call(this,nom, age);
    this.matricule = matricule;

    this.etudier= function() {
        res = `L'étudiant ${nom} avec le matricule ${matricule} étudie pour son examen.`;
        console.log(res);
    };
}

let etudiant = new Etudiant("Jane", 22, 123456);
etudiant.sePresenter();
etudiant.etudier();