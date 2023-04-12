export function calculatePeriods(presentValue, payment, featureValue, interest) {

    const isEnd = document.querySelector('input[name="radio-choice"]:checked').value === 'End';
    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = interest / 100;

        if (isEnd) {
            const PVadj = pv * (1 + rate); // adjust the present value for the interest earned during the year
            const FVadj = featureValue - pmt; // subtract the payment from the future value

            const periods = Math.log((FVadj * rate + pmt * rate + pmt) / (pmt * rate + PVadj * rate + pmt)) / Math.log(1 + rate);
            return (periods + 1).toFixed(2); // add 1 to account for the payment made at the end of the year

        } else {
            const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
            return periods.toFixed(2);
        }

    } else if (compundingChoice.value == "Monthly") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 12) / 100;

        if (isEnd) {
            const PVadj = pv * (1 + rate);
            const FVadj = featureValue - pmt;

            const periods = Math.log((FVadj * rate + pmt * rate + pmt) / (pmt * rate + PVadj * rate + pmt)) / Math.log(1 + rate);
            return (periods + 1).toFixed(2);

        } else {
            const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
            return periods.toFixed(2);
        }

    } else if (compundingChoice.value == "Semiannually") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 2) / 100;

        if (isEnd) {
            const PVadj = pv * (1 + rate);
            const FVadj = featureValue - pmt;

            const periods = Math.log((FVadj * rate + pmt * rate + pmt) / (pmt * rate + PVadj * rate + pmt)) / Math.log(1 + rate);
            return (periods + 1).toFixed(2);

        } else {
            const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
            return periods.toFixed(2);
        }

    } else if (compundingChoice.value == "Quarterly") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 4) / 100;

        if (isEnd) {
            const PVadj = pv * (1 + rate);
            const FVadj = featureValue - pmt;

            const periods = Math.log((FVadj * rate + pmt * rate + pmt) / (pmt * rate + PVadj * rate + pmt)) / Math.log(1 + rate);
            return (periods + 1).toFixed(2);

        } else {
            const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
            return periods.toFixed(2);
        }

    }

}