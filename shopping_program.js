// Define a variable to represent the user's login status
let loggedIn = true;

// Array representing items in the user's cart
let cart = [
    'Shirts',
    'Shoes',
    'Bread',
    'Cell Phone',
    'Candy Corn',
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
    'Tomato'
];

// Conditional check to see if the user is logged in
if (loggedIn) {
    console.log("You are logged in. Here are the items in your cart:");
    
    // Loop over the cart array and display each item
    for (let i = 0; i < cart.length; i++) {
        console.log(`- ${cart[i]}`);
    }
} else {
    console.log("Please log in to view your cart.");
}
