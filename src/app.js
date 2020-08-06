import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import picture from "./beslam-logo.png";
import { createElement } from "./utils/elements";
import { getNorrisJokes } from "./api/norrisjokes";
import { createCard } from "./components/card";

const title = createTitle();
const toggleButton = createToggleButton();
const myImg = new Image();
myImg.src = picture;

const fetchButton = createElement("button", {
  innerHTML: "FETCH IT",
});

// // MODERNE SCHREIBWEISE AUF DIE KONZENTRIEREN WIR UNS AUCH
fetchButton.addEventListener("click", async () => {
  const joke = await getNorrisJokes();
  const card = createCard({
    title: "Slawo Norris Joke Nr: " + joke.value.id,
    jokes: joke.value.joke,
  });
  document.body.append(card);
  console.log(joke);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(myImg);
document.body.append(fetchButton);

//LEONS API: https://api.jikan.moe/v3/anime/269
//JONAS API: "https://official-joke-api.appspot.com/random_joke"
//   try {
//     const response = await fetch(
//       "http://api.icndb.com/jokes/random?firstName=Slawo&amp"
//     );
//     if (response.ok) {
//       //if HTTP-status is 200-299
//       const data = await response.json();
//       console.log(data);
//     } else {
//       throw new Error("Error!");
//     }
//   } catch (error) {
//     console.error(error);
//   }

// fetchButton.addEventListener("click", () => {
//   console.log("CLICK");
//   //Gegenstück zur oberen Schreibweise -> Chaining
//   const promise = fetch(
//     "http://api.icndb.com/jokes/random?firstName=Slawo&amp"
//   );
//   promise
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// });
