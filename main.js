/* Desktop menu JS variables */
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* Mobile Menu JS variables*/
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
/* Car-shop */
const menuCar = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector("aside");

/* Product Area */
const cardsContainer = document.querySelector(".cards-container");

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

/* Product Area / show products in view */
function renderArray(arr) {
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.src = product.image;

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.src = "./icons/bt_add_to_cart.svg";

        // Add productImgCart to productInfoFigure
        productInfoFigure.appendChild(productImgCart);

        // Add productPrice and productName to productInfoDiv
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // Add productInfoDiv and productInfoFigure to productInfo
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        // Add productImg and productInfo to productCard
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // Add productCard to cardsContainer
        cardsContainer.appendChild(productCard);
    }
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bear",
    price: 50,
    image: "https://res.cloudinary.com/oita/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1687970914/Merco/Parte%201/851785320858_PELUCHE_30_CM_OSOS_TIEDYE_2_pp9xqq.png",
});
productList.push({
    name: "SpiderMan",
    price: 220,
    image: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00501099418609l.jpg",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bear",
    price: 50,
    image: "https://res.cloudinary.com/oita/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1687970914/Merco/Parte%201/851785320858_PELUCHE_30_CM_OSOS_TIEDYE_2_pp9xqq.png",
});
productList.push({
    name: "SpiderMan",
    price: 220,
    image: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00501099418609l.jpg",
});

renderArray(productList);
