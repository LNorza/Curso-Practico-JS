/* Desktop menu JS variables */
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* Mobile Menu JS variables*/
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

/* function to activate the animation of mobile menu */
function toggleMobileMenu() {
    mobileMenu.classList.toggle("oculto");
}

/* function to hide the mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
} */
