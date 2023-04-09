import { calculateFutureValue } from "./functionalities/futureValue.js"; 
import { calculatePayments } from "./functionalities/payments.js";
import { calculatePeriods } from "./functionalities/periods.js";
import { calculatePresentValue } from "./functionalities/presentValue.js"; 
import { calculateRate } from "./functionalities/rate.js";

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

    const pmtBtn = document.getElementById('pmtBtn');
    pmtBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let payments = calculatePayments(pvInput.value, fvInput.value, rateInput.value, periodsInput.value)
        pmtInput.value = payments;
    })

    const rateBtn = document.getElementById('rateBtn');
    rateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let rate = calculateRate(pvInput.value, pmtInput.value, fvInput.value, periodsInput.value);
        rateInput.value = rate;
    })

    const periodsBtn = document.getElementById('periodsBtn');
    periodsBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let periods = calculatePeriods(pvInput.value, pmtInput.value, fvInput.value, rateInput.value);
        periodsInput.value = periods;
    })

});