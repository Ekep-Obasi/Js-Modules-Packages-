import data from "./functionality.js";
import "./styles/main.css"

const incrementButtonElement = document.querySelector(".add");
const decrementButtonElement = document.querySelector(".sub");
export let number = document.querySelector(".number");

incrementButtonElement.addEventListener("click", data.increment);
decrementButtonElement.addEventListener("click", data.decrement);

// compile Vs transpile
// Modules are used to ensure dry principles and separation of conern
