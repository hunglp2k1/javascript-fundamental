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

function setLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

setLocalStorage(cart);

function getLocalStorage() {
    const cartStored = JSON.parse(localStorage.getItem("cart"));
    return cartStored;
}

const cartFromLocal = getLocalStorage();

function totalOrder(cart) {
    const sum = cart.reduce(
        (sum, product) => sum + product["price"] * product["quantity"],
        0
    );
    return sum;
}

const total = totalOrder(cartFromLocal);

console.log(
    `Total price of cart is ${new Intl.NumberFormat("de-DE").format(total)} VND`
);
