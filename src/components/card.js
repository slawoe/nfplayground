import "./card.css";
import { createElement } from "../utils/elements";

export function createCard(props) {
  const title = createElement("h2", {
    innerText: props.title,
  });
  const jokes = createElement("p", {
    innerText: props.jokes,
  });

  const card = createElement(
    "div",
    {
      className: "card",
    },
    [title, jokes]
  );

  return card;
}
