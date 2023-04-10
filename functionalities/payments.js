export function calculatePayments(presentValue, futureValue, annualRate, periods) {

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        annualRate /= 100;
        const paymentPerPeriod = presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)));
        const paymentWithFv = futureValue * annualRate / (Math.pow(1 + annualRate, periods) - 1);
        const paymentWithPv = paymentPerPeriod + paymentWithFv;
        return (-1 * paymentWithPv.toFixed(2))

    } else if (compundingChoice.value == "Monthly") {

        annualRate = (annualRate / 12) / 100;
        const paymentPerPeriod = presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)));
        const paymentWithFv = futureValue * annualRate / (Math.pow(1 + annualRate, periods) - 1);
        const paymentWithPv = paymentPerPeriod + paymentWithFv;
        return (-1 * paymentWithPv.toFixed(2))

    } else if (compundingChoice.value == "Semiannually") {

        annualRate = (annualRate / 2) / 100;
        const paymentPerPeriod = presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)));
        const paymentWithFv = futureValue * annualRate / (Math.pow(1 + annualRate, periods) - 1);
        const paymentWithPv = paymentPerPeriod + paymentWithFv;
        return (-1 * paymentWithPv.toFixed(2))

    } else if (compundingChoice.value == "Quarterly") {

        annualRate = (annualRate / 4) / 100;
        const paymentPerPeriod = presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)));
        const paymentWithFv = futureValue * annualRate / (Math.pow(1 + annualRate, periods) - 1);
        const paymentWithPv = paymentPerPeriod + paymentWithFv;
        return (-1 * paymentWithPv.toFixed(2))
    }

}