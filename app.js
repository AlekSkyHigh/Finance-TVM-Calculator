function calculateFutureValue(presentValue, payments, interestRate, periods) {

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        let futureValue = -1 * presentValue;
        for (let i = 1; i <= periods; i++) {
            futureValue -= payments;
            futureValue *= 1 + (interestRate / 100);
        }
        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Monthly") {

        const monthlyRate = (interestRate / 12) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + monthlyRate, periods) -
            payments * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate) * (1 + monthlyRate);

        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Semiannually") {

        const semiAnnualRate = (interestRate / 2) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + semiAnnualRate, periods) - 
            payments * ((Math.pow(1 + semiAnnualRate, periods) - 1) / semiAnnualRate) * (1 + semiAnnualRate);

        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Quarterly"){

        const quarterlyRate = (interestRate / 4) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + quarterlyRate, periods) - 
            payments * ((Math.pow(1 + quarterlyRate, periods) - 1) / quarterlyRate) * (1 + quarterlyRate);

        return futureValue.toFixed(2);

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
