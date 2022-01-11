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
