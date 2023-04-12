export function calculatePeriods(presentValue, payment, featureValue, interest) {

    const pv = -presentValue;
    const pmt = -payment;
    const rate = interest / 100;

    const periods = Math.log((featureValue * rate + pmt * rate + pmt) / (pmt * rate + pv * rate + pmt)) / Math.log(1 + rate);
    return periods.toFixed(2);
}