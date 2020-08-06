import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import picture from "./beslam-logo.png";

const title = createTitle();
const toggleButton = createToggleButton();
const myImg = new Image();
myImg.src = picture;

document.body.append(title);
document.body.append(toggleButton);
document.body.append(myImg);
