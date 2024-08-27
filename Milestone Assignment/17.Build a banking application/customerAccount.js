// Customer account object
const customerAccount = {
    name: 'John Doe',
    balance: 1000, // Initial balance

    // Method to deposit an amount into the account
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.name} deposited Rs. ${amount}. New balance: Rs. ${this.balance}`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    },

    // Method to withdraw an amount from the account
    withdraw: function(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`${this.name} withdrew Rs. ${amount}. New balance: Rs. ${this.balance}`);
            } else {
                console.log('Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be greater than zero.');
        }
    },

    // Method to check the current balance
    getBalance: function() {
        console.log(`${this.name}'s current balance: Rs. ${this.balance}`);
    }
};

// Example usage:
customerAccount.deposit(500);    // Deposits Rs. 500
customerAccount.withdraw(200);   // Withdraws Rs. 200
customerAccount.getBalance();   // Shows the current balance
customerAccount.withdraw(1500);  // Attempt to withdraw more than the available balance
