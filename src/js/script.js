const topHeader = document.getElementById("main-header");

window.addEventListener("scroll", function () {
  topHeader.classList.toggle("sticky-nav", window.scrollY > 0);
});
