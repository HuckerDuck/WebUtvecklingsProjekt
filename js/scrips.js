const hamburger = document.getElementById("hamburger");
const navsmall = document.getElementById("navbarMobileList");

hamburger.addEventListener("click", () => {
    navbarMobileList.classList.toggle("active");
});