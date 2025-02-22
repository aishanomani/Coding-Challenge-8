// Task 1: Function Declaration
// Scenario: Employee Salary Calculation
console.log("********** Employee Salary Calculation **********");
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // "Net Salary: $6950.00"

// Task 2: Function Expression
// Scenario: Product Price After Discount
console.log("********** Product Price After Discount **********");
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};
console.log(calculateDiscount(100, 0.2)); // "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // "Final Price: $212.50"

// Task 3: Arrow Function
// Scenario: Service Fee Calculation
console.log("********** Service Fee Calculation **********");
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let fee = amount * feeRate;
    return `Service Fee: $${fee.toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); // "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // "Service Fee: $50.00"

// Task 4: Parameters and Arguments
// Scenario: Car Rental Cost Calculation
console.log("********** Car Rental Cost Calculation **********");
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = (dailyRate * days) + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}
console.log(calculateRentalCost(3, "Economy", true)); // "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // "Total Rental Cost: $500"

// Task 5: Returning Values
// Scenario: Loan Payment Calculation
console.log("********** Loan Payment Calculation **********");
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}
console.log(calculateLoanPayment(1000, 0.05, 2)); // "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // "Total Payment: $6050.00"

// Task 6: Higher-Order Functions
// Scenario: Identifying Large Transactions
console.log("********** Identifying Large Transactions **********");
let transactions = [200, 1500, 3200, 800, 2500];
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // [1500, 3200, 2500]

// Task 7: Closures
// Scenario: Shopping Cart Tracker
console.log("********** Shopping Cart Tracker **********");
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}
let cart = createCartTracker();
console.log(cart(20)); // "Total Cart Value: $20"
console.log(cart(35)); // "Total Cart Value: $55"

// Task 8: Recursion in JavaScript
// Scenario: Savings Growth Projection
console.log("********** Savings Growth Projection **********");
function calculateSavings(years, amount) {
    if (years >= 10) return `Projected Savings: $${amount.toFixed(2)}`;
    return calculateSavings(years + 1, amount * 1.05);
}
console.log(calculateSavings(8, 1000)); // "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // "Projected Savings: $6381.41"