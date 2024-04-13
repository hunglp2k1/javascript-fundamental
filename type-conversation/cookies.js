"use strict";

const cart = [
    { productId: 1, productName: "Iphone X", quantity: 2, price: 10_800_000 },
    {
        productId: 2,
        productName: "Iphone 15 Pro Max",
        quantity: 5,
        price: 22_980_000,
    },
    { productId: 3, productName: "Iphone 11", quantity: 3, price: 14_560_000 },
];

function setCookie(cart) {
    document.cookie =
        "cart=" +
        JSON.stringify(cart) +
        "; expires=Wed,16 Apr 2024 12:00:00 UTC; path=/";
}

setCookie(cart);
// console.log(JSON.parse());
// console.log(JSON.parse(document.cookie));
function getCookie() {
    const cartStored = JSON.parse(document.cookie.split("=")[1]);
    return cartStored;
}

const cartFromCookie = getCookie();
function totalOrder(cart) {
    const sum = cart.reduce(
        (sum, product) => sum + product["price"] * product["quantity"],
        0
    );
    return sum;
}

const total = totalOrder(cartFromCookie);

console.log(
    `Total price of cart is ${new Intl.NumberFormat("de-DE").format(total)} VND`
);
