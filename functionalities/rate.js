export function calculateRate(presentValue, payments, futureValue, periods) {

    const isEnd = document.querySelector('input[name="radio-choice"]:checked').value === 'End';
    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        const n = periods; // number of years
        const p = -presentValue; // present value (negative to represent investment)
        const r = 0.01; // starting guess for annual interest rate
        const f = futureValue; // future value
        let guess = r;
        let tolerance = 0.0001;

        if (isEnd) {

            function calculateFutureValue(rate) {
                const compoundedValue = p * Math.pow((1 + rate), n); // compounded value of present value
                const annuityValue = -payments * ((Math.pow((1 + rate), n) - 1) / rate); // annuity value of annual payment (negative to represent investment)
                return compoundedValue + annuityValue + f; // future value
            }

            function calculateDerivative(rate) {
                const value1 = -payments * n * Math.pow((1 + rate), n - 1) / rate;
                const value2 = -payments * ((Math.pow((1 + rate), n) - 1) / Math.pow(rate, 2)) + p * n * Math.pow((1 + rate), n - 1);
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

        } else {

            function calculateFutureValue(rate) {
                const compoundedValue = p * Math.pow((1 + rate), n); // compounded value of present value
                const annuityValue = -payments * ((Math.pow((1 + rate), n) - 1) / rate) * (1 + rate); // annuity value of annual payment (negative to represent investment), with payment made at the beginning of each period
                return compoundedValue + annuityValue + f; // future value
            }

            function calculateDerivative(rate) {
                const value1 = -payments * n * Math.pow((1 + rate), n - 1) / rate;
                const value2 = -payments * ((Math.pow((1 + rate), n) - 1) / Math.pow(rate, 2)) + p * n * Math.pow((1 + rate), n - 1);
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

    } else if (compundingChoice.value == 'Monthly') {


        if (isEnd) {


            //todo

        } else {

            //todo


        }




    }

}