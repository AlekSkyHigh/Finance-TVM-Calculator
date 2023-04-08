export function calculatePresentValue(regularPayment, futureValue, annualRate, periods) {

    const isEnd = document.querySelector('input[name="radio-choice"]:checked').value === 'End';

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        annualRate /= 100;
        const compoundedRate = Math.pow(1 + annualRate, periods);
        let presentValue = (-regularPayment * (compoundedRate - 1) / annualRate) / compoundedRate * (1 + (isEnd ? 0 : annualRate));
        presentValue -= futureValue / compoundedRate;
        return presentValue.toFixed(2);

    } else if (compundingChoice.value == "Monthly") {

        const monthlyRate = (annualRate / 12) / 100;
        const compoundedRate = Math.pow(1 + monthlyRate, periods);
        let presentValue = (-regularPayment * (compoundedRate - 1) / monthlyRate) / compoundedRate * (1 + (isEnd ? 0 : monthlyRate));
        presentValue -= futureValue / compoundedRate;
        return presentValue.toFixed(2);

    } else if (compundingChoice.value == "Semiannually") {

        const semiAnnualRate = (annualRate / 2) / 100;
        const compoundedRate = Math.pow(1 + semiAnnualRate, periods);
        let presentValue = (-regularPayment * (compoundedRate - 1) / semiAnnualRate) / compoundedRate * (1 + (isEnd ? 0 : semiAnnualRate));
        presentValue -= futureValue / compoundedRate;
        return presentValue.toFixed(2);

    } else if (compundingChoice.value == "Quarterly") {

        const quarterlyRate = (annualRate / 4) / 100;
        const compoundedRate = Math.pow(1 + quarterlyRate, periods);
        let presentValue = (-regularPayment * (compoundedRate - 1) / quarterlyRate) / compoundedRate * (1 + (isEnd ? 0 : quarterlyRate));
        presentValue -= futureValue / compoundedRate;
        return presentValue.toFixed(2);

    }

}

