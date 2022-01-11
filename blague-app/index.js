// first of all, test the URL
// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      
      header.textContent = joke.text_head;

      joke.text !== ""
        ? (content.textContent = joke.text)
        : (content.textContent = joke.text_hidden);
    });
}

getJoke();

document.body.addEventListener("click", getJoke);