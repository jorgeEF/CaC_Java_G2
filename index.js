const content = document.getElementById("main-content");
const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke-text");

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single")
    .then((response) => response.json())
    .then((data) => (jokeText.innerText = data.joke));
}

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  content.style.marginTop = menu.classList.contains("open") ? "200px" : "0";
}
