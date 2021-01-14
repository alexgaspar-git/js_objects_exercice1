// ## Exo 1 
// Créez un objet avec vos valeurs : 'Nom', 'prenom', 'age', 'taille'
// Affichez d'abord tout l'objet via un console.log() et puis votre âge.

let objet1 = {
    prenom: "Jefe",
    nom: "El grande",
    age: "oui",
    taille: "grand",
}

console.log(objet1);
console.log(objet1.age);

// ## Exo 2 
// Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let objet2 = {
    prenom: "vagabond",
    nom: "johnson",
    age: "mhm",
    taille: "12",
}

let objet3 = {
    prenom: objet1.prenom,
    nom: objet1.nom,
    age: objet2.age,
    taille: "6",
}


// ## Exo 3
// Remplir les propriétées du 3eme personnage
// Son nom doit valoir le nom du personnage1
// Son age doit valoir celui du personnage2
// Et sa taille doit être rempli avec la valeur que vous souhaitez

// ## Exo 4
// Créer un personnage4 et donner lui la méthode [Saluer] qui dira "Coucou" avec le nom du personage2
// Lancer cette méthode

let objet4 = {
    saluer: `Coucou ${objet2.prenom}`
}

console.log(objet4.saluer);


// ## Exo 5
// Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let objet5 = {
    prenom: "Gilbert",
    nom: "II",
    sePresenter() {
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}`);
    }
}

console.log(objet5.sePresenter());

// ## Exo 6
// Créer un objet avec un nom et une méthode
// La méthode de votre objet lance un prompt permetant de changer son age
// Une alert renvoi "[objet] a [age de l'objet] ans"

let objet6 = {
    nom: "Skibap",
    changAge() {
        let ageP = prompt('age?');
        objet6.age = ageP
        alert(`${this.nom} à ${this.age} ans`);
    }
}
objet6.changAge();
console.log(objet6);

// ## Exo 7
// Créez 3 personnes avec leur nom et l'age, puis créez un voleur.
// Le voleur a juste une methode qui est 'usurpation' qui prend comme paramètre un des 3 personnages et il prend son nom et son age

let voleur = {
    usurpation(a) {
        this.age = a.age
    }
}
voleur.usurpation(objet3);
console.log(voleur);

// ## Exo 8
// Créer deux personnages du nom de François et Sergio
// Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let francois = {
    prenom: "francois",
    panier: ["huile","tomate"],
    derober(a) {
        this.panier.push(a.panier[0]);
        sergio.panier.splice(0, 1);
        this.panier.push(a.panier[1]);
        sergio.panier.splice(1, 1);
    }
}

let sergio = {
    prenom: "sergio",
    panier: ["pain", "onion"],
}

francois.derober(sergio);
console.log(sergio,francois);