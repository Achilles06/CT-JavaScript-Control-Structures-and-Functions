// Initial balance of the bank account
let balance = 0;

/**
 * Function to deposit money into the bank account
 * @param {number} amount - The amount to deposit
 */
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

/**
 * Function to withdraw money from the bank account
 * @param {number} amount - The amount to withdraw
 */
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
        } else {
            console.log("Insufficient funds for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

/**
 * Function to check the current balance of the bank account
 */
function checkBalance() {
    console.log(`Current Balance: $${balance}`);
}

// Testing the functions
deposit(100);         // Expected output: Deposited: $100. New Balance: $100
withdraw(50);         // Expected output: Withdrew: $50. New Balance: $50
checkBalance();       // Expected output: Current Balance: $50
withdraw(100);        // Expected output: Insufficient funds for this withdrawal.
checkBalance();       // Expected output: Current Balance: $50
