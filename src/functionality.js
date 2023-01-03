import { number } from "./index.js";

let value = 0;

function increment() {
  number.innerHTML++;
}

function decrement() {
  number.innerHTML--;
}

export default { decrement, increment };
