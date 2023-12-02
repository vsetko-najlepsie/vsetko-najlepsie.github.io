document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var spanElement = document.querySelector(".greeting a");
    spanElement.classList.add("visible");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var spanElement = document.querySelector(".greeting span");
    spanElement.classList.add("visible");
  }, 10000);
});
