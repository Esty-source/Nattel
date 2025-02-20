// JavaScript code for the online delivery platform

// Sample data for products
const products = [
    { id: 1, name: "Pizza", price: 9.99, image: "images/pizza.jpg" },
    { id: 2, name: "Burger", price: 5.99, image: "images/burger.jpg" },
    { id: 3, name: "Sushi", price: 12.99, image: "images/sushi.jpg" },
];

// Cart to hold selected items
let cart = [];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalDisplay = document.createElement("div");
    totalDisplay.className = "cart-total";
    totalDisplay.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
    cartContainer.appendChild(totalDisplay);
}

// Function to initialize the app
function init() {
    displayProducts();
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", init);