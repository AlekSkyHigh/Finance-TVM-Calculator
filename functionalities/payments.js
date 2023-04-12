export function calculatePayments(presentValue, futureValue, interestRate, periods) {

    const isEnd = document.querySelector('input[name="radio-choice"]:checked').value === 'End';
    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        interestRate /= 100;
        presentValue = -presentValue;

        if (isEnd) {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods)));
            return annuity.toFixed(2);

        } else {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods))) / (1 + interestRate);
            return annuity.toFixed(2);
        }

    } else if (compundingChoice.value == "Monthly") {

        interestRate = (interestRate / 12) / 100;
        presentValue = -presentValue;

        if (isEnd) {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods)));
            return annuity.toFixed(2);

        } else {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods))) / (1 + interestRate);
            return annuity.toFixed(2);
        }
        

    } else if (compundingChoice.value == "Semiannually") {

        interestRate = (interestRate / 2) / 100;
        presentValue = -presentValue;

        if (isEnd) {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods)));
            return annuity.toFixed(2);

        } else {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods))) / (1 + interestRate);
            return annuity.toFixed(2);
        }
        

    } else if (compundingChoice.value == "Quarterly") {

        interestRate = (interestRate / 4) / 100;
        presentValue = -presentValue;

        if (isEnd) {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods)));
            return annuity.toFixed(2);

        } else {
            const futureValueWithInterest = futureValue * Math.pow(1 + interestRate, -periods);
            const annuity = -(futureValueWithInterest - presentValue) * (interestRate / (1 - Math.pow(1 + interestRate, -periods))) / (1 + interestRate);
            return annuity.toFixed(2);
        }

    }

}