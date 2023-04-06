function calculateFutureValue(presentValue, payments, interestRate, periods) {

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value === "Annualy") {

        let futureValue = -1 * presentValue;
        for (let i = 1; i <= periods; i++) {
            futureValue -= payments;
            futureValue *= 1 + (interestRate / 100);
        }
        return futureValue.toFixed(2);

    } else if (compundingChoice.value === "Monthly") {

        const monthlyInterestRate = (interestRate / 12) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + monthlyInterestRate, periods) +
            Math.abs(payments) * ((Math.pow(1 + monthlyInterestRate, periods) - 1) / monthlyInterestRate);

        return futureValue.toFixed(2);

    } else if (compundingChoice.value === "Semiannually") {

        // const semiAnnualInterestRate = (interestRate / 2) / 100;
        // const totalNumberOfPayments = periodInMonths / 6;
        // const semiAnnualPayments = payments / 2;

        // // Calculate the future value using the present value and the semi-annual payments
        // const futureValue = Math.abs(presentValue) * Math.pow(1 + semiAnnualInterestRate, totalNumberOfPayments * 2) +
        //     Math.abs(semiAnnualPayments) * ((Math.pow(1 + semiAnnualInterestRate, totalNumberOfPayments * 2) - 1) / semiAnnualInterestRate);

        // // Return the future value as a negative number to represent the investment
        // return -(futureValue.toFixed(2));

    }

}

document.addEventListener('DOMContentLoaded', function () {
    let fvBtn = document.getElementById('fvBtn');

    const pvInputField = document.getElementById('present-value');
    const pmtsInputField = document.getElementById('payments');
    const futureValueInputField = document.getElementById('future-value');
    const annualRateInputField = document.getElementById('annual-rate');
    const periodsInputField = document.getElementById('periods');

    fvBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let futureValue = calculateFutureValue(pvInputField.value, pmtsInputField.value, annualRateInputField.value, periodsInputField.value);

        futureValueInputField.value = futureValue
    });



});
