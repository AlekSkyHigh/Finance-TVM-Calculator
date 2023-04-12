export function calculatePeriods(presentValue, payment, featureValue, interest) {

    const compundingChoice = document.getElementById('select-choice');

    if (compundingChoice.value == "Annualy") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = interest / 100;

        const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
        return periods.toFixed(2);

    } else if (compundingChoice.value == "Monthly") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 12) / 100;

        const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
        return periods.toFixed(2);

    } else if (compundingChoice.value == "Semiannually") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 2) / 100;

        const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
        return periods.toFixed(2);

    } else if (compundingChoice.value == "Quarterly") {

        const pv = -presentValue;
        const pmt = -payment;
        const rate = (interest / 4) / 100;

        const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
        return periods.toFixed(2);

    }


}