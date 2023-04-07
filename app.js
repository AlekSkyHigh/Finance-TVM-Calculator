import { calculateFutureValue } from "./futureValue.js";

document.addEventListener('DOMContentLoaded', function () {

    const pvInputField = document.getElementById('present-value');
    const pmtsInputField = document.getElementById('payments');
    const futureValueInputField = document.getElementById('future-value');
    const annualRateInputField = document.getElementById('annual-rate');
    const periodsInputField = document.getElementById('periods');

    const fvBtn = document.getElementById('fvBtn');
    fvBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let futureValue = calculateFutureValue(pvInputField.value, pmtsInputField.value, annualRateInputField.value, periodsInputField.value);
        futureValueInputField.value = futureValue;
    });

});