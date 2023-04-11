export function calculatePeriods(presentValue, annualInvestment, futureValue, interestRate) {

    let currentAmount = Number(-presentValue);
    let payment = Number(-annualInvestment);
    let finalAmount = Number(futureValue);
    let years = 0;
    
    while (currentAmount < finalAmount) {
        currentAmount += payment;
        currentAmount *= (1 + (interestRate / 100));
        years++;
    }

    return years;
}