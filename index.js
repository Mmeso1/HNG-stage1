document.addEventListener("DOMContentLoaded", function () {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  currentTimeUTC.innerHTML = `${new Date().toUTCString()} `;
  currentDay.innerHTML = `${new Date().toDateString().split(" ")[0]}`;
});
