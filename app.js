// function calculateFutureValue(presentValue, interestRate, years) {
//     let futureValue = -1 * presentValue * Math.pow(1 + (interestRate / 100), years);
//     return futureValue.toFixed(2);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     let fvBtn = document.getElementById('fvBtn');

//     const pvInputField = document.getElementById('present-value');
//     const annualRateInputField = document.getElementById('annual-rate');
//     const periodsInputField = document.getElementById('periods');
//     const pmtsInputField = document.getElementById('payments');

//     fvBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//         // let futureValue = calculateFutureValue(-1000, 5, 10);
//         let futureValue = calculateFutureValue(pvInputField.value, annualRateInputField.value, periodsInputField.value);
//         // console.log("The future value is $" + futureValue);
//         futureValueInputField.value = futureValue
//     });

//     const futureValueInputField = document.getElementById('future-value');
// });


// ---------------------------------------------------------------------------------------------------------------
function calculateFutureValue(presentValue, payments, interestRate, years) {

    // if (isNaN(presentValue) || isNaN(payments) || isNaN(interestRate) || isNaN(years)) {
    //     throw new Error("Invalid input: all inputs must be numbers.");
    // }

    let futureValue = -1 * presentValue;

    for (let i = 1; i <= years; i++) {
        futureValue -= payments;
        futureValue *= 1 + (interestRate / 100);
    }

    return futureValue.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    let fvBtn = document.getElementById('fvBtn');

    const pvInputField = document.getElementById('present-value');
    const pmtsInputField = document.getElementById('payments');
    const futureValueInputField = document.getElementById('future-value');
    const annualRateInputField = document.getElementById('annual-rate');
    const periodsInputField = document.getElementById('periods');
    const compundingChoice = document.getElementById('select-choice'); //to do...

    fvBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let futureValue = calculateFutureValue(pvInputField.value, pmtsInputField.value, annualRateInputField.value, periodsInputField.value);

        futureValueInputField.value = futureValue
    });

});


// This is a test 