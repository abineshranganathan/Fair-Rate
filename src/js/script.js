const topHeader = document.getElementById("main-header");
console.log(topHeader);

window.addEventListener("scroll", function () {
  topHeader.classList.toggle("sticky-nav", window.scrollY > 0);
});
