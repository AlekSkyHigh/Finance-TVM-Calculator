export function calculateRate(presentValue, annualPayment, futureValue, years) {
    const n = years; // number of years
    const p = -presentValue; // present value (negative to represent investment)
    const r = 0.01; // starting guess for annual interest rate
    const f = futureValue; // future value
    let guess = r;
    let tolerance = 0.0001;

    function calculateFutureValue(rate) {
        const compoundedValue = p * Math.pow((1 + rate), n); // compounded value of present value
        const annuityValue = -annualPayment * ((Math.pow((1 + rate), n) - 1) / rate); // annuity value of annual payment (negative to represent investment)
        return compoundedValue + annuityValue + f; // future value
    }

    function calculateDerivative(rate) {
        const value1 = -annualPayment * n * Math.pow((1 + rate), n - 1) / rate;
        const value2 = -annualPayment * ((Math.pow((1 + rate), n) - 1) / Math.pow(rate, 2)) + p * n * Math.pow((1 + rate), n - 1);
        return value1 + value2;
    }

    let i = 0;
    let fValue = calculateFutureValue(guess);
    let derivative = calculateDerivative(guess);

    while (Math.abs(f - fValue) > tolerance && i < 1000) {
        guess = guess - (fValue - f) / derivative;
        fValue = calculateFutureValue(guess);
        derivative = calculateDerivative(guess);
        i++;
    }

    return (guess * 100).toFixed(3); // return annual interest rate as a percentage
}

// in progress...