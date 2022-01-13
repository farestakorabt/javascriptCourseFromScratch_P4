// XMLHttpRequest
function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// --------------------------
// FETCH
// --------------------------

// fetch("https:/monLien.com", )
//   .then((response) => {
//     // => then est une promesse
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data.workbench.iconTheme));

const myHeaders = new Headers();

const init1 = {
  method: "GET",
  header: myHeaders,
  mode: "cors", // => permission
  cache: "default",
};

// fetch("data.json", init1).then((res) => console.log(res));

// CRUD => create: post, read (get), update (put), delete (delete)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Darius3",
    message: "Hello le monde",
    age: 55,
    mode: "cors",
    Credential: "same-origin",
  }),
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/", init2).then(() => {
    // console.log("data envoyé");
  });
});

// --------------------------
// Asynchrone
// --------------------------
setTimeout(() => {
  // console.log("test");
}, 200);

// Promise

// fetch("monLien").then((res) => res);
// => tu te conectes d'abord avec le lien: fetch("monLien"), puis .then((res) => res)

// async/await
async function fetchData() {
  await fetch("monLien");
  // attend que le await soit éxecuté avant de faire la suite, on execute d'abord le await puis la suite

  executerLaFonction();
}

// --------------------------
// JSON
// --------------------------

// methode .json() => methode qui s'auto-resout en renvoyant le body de la requete.
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log("data:", data);

    let seetings2 = JSON.stringify(data); // stringify => convertit en JSON
    // console.log("seetings2:", seetings2);

    let parsed2 = JSON.parse(seetings2); // Parse => transforme json en js
    // console.log("parsed2:", parsed2);
  });

// --------------------------
// web API
// --------------------------

// CLIENT STORAGE
// --------------------------

// Local Storage

// local storage =  10mo peuvent PAS etre récupérés par le site
// cookies = 4ko => peuvent etre récupérés par le site

localStorage.data = "je stocke la data";
// console.log(localStorage.data);
// localStorage.removeItem("data");
// localStorage.clear();
// document.body.textContent = localStorage.data;

const objet = {
  name: "Roberto",
  age: 112,
};

// il faut passer des chaines de caracteres
localStorage.user = JSON.stringify(objet);

// console.log(JSON.parse(localStorage.user)); // =>
// age: 112
// name: "Roberto"

// --------------------
// session storage => active juisqu'à l'extinction du pc
// sessionStorage.dataSettings3 = "56 meters";
// console.log(sessionStorage.dataSettings3);
// sessionStorage.clear();

// --------------------
// COOKIES

document.cookie = "nickname=darius"; // value => key, nickname => darius

// Bonne pratique
document.cookie = "pseudo=Pat;path=/,max-age=45000,secure;samesite";
