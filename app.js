import { calculateFutureValue } from "./functionalities/futureValue.js"; 
import { calculatePresentValue } from "./functionalities/presentValue.js"; 

document.addEventListener('DOMContentLoaded', function () {

    const pvInput = document.getElementById('present-value');
    const pmtInput = document.getElementById('payments');
    const fvInput = document.getElementById('future-value');
    const rateInput = document.getElementById('annual-rate');
    const periodsInput = document.getElementById('periods');

    const fvBtn = document.getElementById('fvBtn');
    fvBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let futureValue = calculateFutureValue(pvInput.value, pmtInput.value, rateInput.value, periodsInput.value);
        fvInput.value = futureValue;
    });

    const pvBtn = document.getElementById('pvBtn');
    pvBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let presentValue = calculatePresentValue(pmtInput.value, fvInput.value, rateInput.value, periodsInput.value); 
        pvInput.value = presentValue;
    });

});