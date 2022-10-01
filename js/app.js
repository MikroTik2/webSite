const hambururger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hambururger.addEventListener("click", () => {
   hambururger.classList.toggle("active");
      navMenu.classList.toggle("active");
}) 
