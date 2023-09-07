const jokeContainer = document.getElementById("jokeContent");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    // .then((item) => console.log(item.joke))
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
      console.log(item.joke);
    });
};
btn.addEventListener("click",getJoke);
getJoke();
