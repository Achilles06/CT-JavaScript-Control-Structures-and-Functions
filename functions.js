// Initial balance
let balance = 0;

// Task 1: Function to handle deposits
function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`Successfully deposited $${amount}. Current balance: $${balance}.`);
  } else {
    console.log('Deposit amount must be greater than zero.');
  }
}

// Task 2: Function to handle withdrawals
function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    console.log(`Successfully withdrew $${amount}. Current balance: $${balance}.`);
  } else if (amount > balance) {
    console.log('Insufficient balance for this withdrawal.');
  } else {
    console.log('Withdrawal amount must be greater than zero.');
  }
}

// Task 3: Function to check the current balance
function checkBalance() {
  console.log(`Current balance: $${balance}.`);
}

// Test the functions
deposit(100);  // Deposit $100
withdraw(30);  // Withdraw $30
checkBalance();  // Check the current balance
withdraw(100);  // Attempt to withdraw $100 (should show insufficient balance)
