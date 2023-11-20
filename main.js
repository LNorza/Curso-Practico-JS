/* Desktop menu JS variables */
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* Mobile Menu JS variables*/
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
/* Car-shop */
const menuCar = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuCar.addEventListener("click", toggleAsideCar);

/* function to activate the animation of desktop menu */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");

    if (!asideCar.classList.contains("hide-right")) {
        asideCar.classList.toggle("hide-right");
    }
}

/* function to activate the animation of mobile menu */
function toggleMobileMenu() {
    mobileMenu.classList.toggle("hide-left");

    if (!asideCar.classList.contains("hide-right")) {
        asideCar.classList.toggle("hide-right");
    }
}
/* function to hide the mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
} */

/* function to activate the animation of car-shop */
function toggleAsideCar() {
    asideCar.classList.toggle("hide-right");

    if (!mobileMenu.classList.contains("hide-left")) {
        mobileMenu.classList.toggle("hide-left");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive");
    }
}
