import { formatInTimeZone } from "date-fns-tz";

const cities = [
  { name: "Oslo", zone: "Europe/Oslo" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "New York", zone: "America/New_York" },
  { name: "Sydney", zone: "Australia/Sydney" },
  { name: "Kypros", zone: "Asia/Nicosia" },
];

export function initWorldClocks(selector = "#clocks") {
  const root = document.querySelector(selector);
  if (!root) return;

  const render = () => {
    const now = new Date();
    root.innerHTML = cities
      .map((c) => {
        const time = formatInTimeZone(now, c.zone, "HH:mm:ss");
        return `
        <li class="clock">
          <strong>${c.name}</strong>
          <span class="time">${time}</span>
        </li>
      `;
      })
      .join("");
  };

  render();
  setInterval(render, 1000);
}
