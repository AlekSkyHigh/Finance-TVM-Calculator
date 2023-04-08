export function calculateFutureValue(presentValue, payments, annualRate, periods) {

    const isEnd = document.querySelector('input[name="radio-choice"]:checked').value === 'End';

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        annualRate /= 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + annualRate, periods) -
            payments * ((Math.pow(1 + annualRate, periods) - 1) / annualRate) * (1 + (isEnd ? 0 : annualRate));
        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Monthly") {

        const monthlyRate = (annualRate / 12) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + monthlyRate, periods) -
            payments * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate) * (1 + (isEnd ? 0 : monthlyRate));
        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Semiannually") {

        const semiAnnualRate = (annualRate / 2) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + semiAnnualRate, periods) -
            payments * ((Math.pow(1 + semiAnnualRate, periods) - 1) / semiAnnualRate) * (1 + (isEnd ? 0 : semiAnnualRate));
        return futureValue.toFixed(2);

    } else if (compundingChoice.value == "Quarterly") {

        const quarterlyRate = (annualRate / 4) / 100;
        const futureValue = Math.abs(presentValue) * Math.pow(1 + quarterlyRate, periods) -
            payments * ((Math.pow(1 + quarterlyRate, periods) - 1) / quarterlyRate) * (1 + (isEnd ? 0 : quarterlyRate));
        return futureValue.toFixed(2);

    }

}