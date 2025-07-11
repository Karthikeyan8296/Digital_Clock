const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const formatToggle = document.getElementById("formatToggle");

function formatTime(num) {
  return num.toString().padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  const is24Hour = formatToggle.checked;
  const ampm = hours >= 12 ? "PM" : "AM";

  if (!is24Hour) {
    hours = hours % 12 || 12;
  }

  const time = `${formatTime(
    hours
  )}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
  clock.innerHTML = is24Hour ? time : `${time} ${ampm}`;

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document
    .querySelectorAll(".colon")
    .forEach((colon) => colon.classList.toggle("blink"));
}

setInterval(updateClock, 1000);
updateClock();
