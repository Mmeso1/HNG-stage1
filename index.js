document.addEventListener("DOMContentLoaded", function () {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  currentTimeUTC.innerHTML = `${new Date().toUTCString()} `;
  currentDay.innerHTML = `${new Date().toDateString().split(" ")[0]}`;

  const headers = document.querySelectorAll(
    ".accordion .accordion-item-header"
  );

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      // Close currently open item
      const openItem = document.querySelector(
        '.accordion .accordion-item-body:not(:first-child):not([style*="display: none"])'
      );
      if (openItem) {
        openItem.style.display = "none";
        openItem.previousElementSibling.querySelector("span").innerHTML =
          "&#43;"; // Change symbol to plus
      }

      // Toggle the clicked item
      const body = this.nextElementSibling;
      if (body.style.display === "block") {
        body.style.display = "none";
        this.querySelector("span").innerHTML = "&#43;"; // Change symbol to plus
      } else {
        body.style.display = "block";
        this.querySelector("span").innerHTML = "&#8722;"; // Change symbol to minus
      }
    });
  });
});
