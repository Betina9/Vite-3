import "./style.css";
import { initWorldClocks } from "./worldClock.js";

document.querySelector("#app").innerHTML = `
  <section class="wc-container">
    <h1>🌍 Verdensklokker</h1>
    <ul id="clocks" class="clocks"></ul>
  </section>
`;

initWorldClocks("#clocks");
