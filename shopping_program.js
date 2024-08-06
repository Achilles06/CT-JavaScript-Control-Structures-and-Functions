//Task 1
let isLoggedIn = true;

if (!isLoggedIn){
    console.log("You must be logged in to add items to your cart.");
} else {
    console.log("Welcome back! You can add items to your cart.");
}

//list of products
const products = [
    {id: 1, name: 'Laptop', price: 800},
    {id: 2, name: 'Phone', price: 500},
    {id: 3, name: 'Tablet', price: 300}
];

let cart = [];

//function to display products
function displayProducts() {
    console.log("Availabel Products:");
    for (let product of products) {
        console.log(`${product.id}. ${product.name} - $${product.price}`)
    }
}

// function to add
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if(product) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart.`);
    } else {
        console.log("Product not found.");
    }
}

//Task 2
displayProducts();

if(isLoggedIn) {
    addToCart(1);
    addToCart(2);
}

function calculateTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total;
}

if (isLoggedIn) {
    const totalCost = calculateTotal();
    console.log(`The total cost of your items is $${totalCost}.`);
}