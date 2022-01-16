player = {
  // => object
  // index : value
  pseudo: "Carmelo",
  team: "Denver",
  age: 33,
  captain: false,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },

  // direBonjour() {
  //   console.log("Bonjour ! je suis " + this.pseudo);
  // },
};

// ajouter
player.ville = "New York";
// console.log(player); // => {pseudo: 'Carmelo', team: 'Denver', age: 33, ville: 'New York'}
player["captain"] = true; // => true

// modifier
player.pseudo = "Melo";
// console.log(player); // => {pseudo: 'Melo', team: 'Denver', ville: 'New York'}

// supprimer
delete player.age;
// console.log(player); // => {pseudo: 'Carmelo', team: 'Denver', ville: 'New York'}

// checker si une propriete existe

// console.log('pseudo' in player); // => true

// console.log('salaire' in player); // => false

// Parcourir un objet

for (const key in player) {
  // console.log(key + " - " + player[key]);
}

// console.log(player.direBonjour());

// Obtenir les clefs

const clefs = Object.keys(player);
// console.log("clefs:", clefs);

// obtenir les valeurs

const valeurs = Object.values(player);
// console.log("valeurs:", valeurs);

const nestedArray2 = Object.entries(player);
// console.log("nestedArray2:", nestedArray2);

const player2 = {
  nom: "Anthony",
  taille: "1m98",
  poids: "95kg",
  age: 36,
};

const fusionPlayers = Object.assign({}, player, player2);
// console.log("fusionPlayers:", fusionPlayers); // => {pseudo: 'Melo', team: 'Denver', captain: true, ville: 'New York', direBonjour: ƒ, …}

// Emprecher la modification

// const newPlayer = Object.freeze(player); // ne change pas du tout, on ne change pas ni ajouter
const newPlayer = Object.seal(player); // on peut changé un parametre existant, mais pas ajouter un parametre
newPlayer.pseudo = "Miloushe";
newPlayer.adress = "33 rue de Houston";

// console.log("newPlayer:", newPlayer);

// -------------------------------
// Construire des objets
// -------------------------------

// Fonction constructeur
function User(pseudo, ville) {
  // this fair reference à l'objet (User)
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    // getCity() est une methode de l'objet (User)
    console.log(this.pseudo + " Habite à " + this.ville);
  };
}
const user1 = new User("Fares", "Paris");
const user2 = new User("Mathieu", "Angers");

// console.log(user2.getCity());

// -------------------------------
// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo, // => pseudo:pseudo,
    ville, //  =>  ville: ville,
  };
}

const user4 = User3("Angelo", "Mars");
// console.log("user4:", user4);

// -------------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }

  // methodes
  sayMyName = function () {
    console.log("Je m'appelle " + this.pseudo + " et j'habite à " + this.ville);
  };
}

const user6 = new Utilisateur("Charlize", "Benoni");
// console.log("user6:", user6);
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite en Laponie");
};

// console.log(user6);

let array22 = [231, 2, 1];
// console.log(array22);

Object.assign(Utilisateur.prototype, {
  method1() {
    // maMethode
  },
  method2() {
    // maMethod2
  },
  // ces methodes ajoutées dans le prototype sont 30% plus rapides que les methodes ajoutées(comme sayMyName)
});

// console.log(Utilisateur.prototype);

// -------------------------------
// L'héritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit " + text);
  }
}

class Cat extends Animal {
  run() {
    console.log("Le chat court !");
  }
}

class Dog extends Animal {
  hunt() {
    console.log("I killed a cat");
  }
}

const baghee = new Cat("Baghee", 54);

console.log(baghee);
