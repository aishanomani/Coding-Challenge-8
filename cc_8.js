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