document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector("header");

  // Header Scroll Effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

});