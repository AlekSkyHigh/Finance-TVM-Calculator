// export function calculatePayments(presentValue, futureValue, annualRate, periods) {

//     annualRate /= 100;

//     //const paymentNoPv = futureValue * (annualRate / (Math.pow(1 + annualRate, periods) - 1)); //works

//     const paymentWithPv = (presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)))) + ((futureValue / Math.pow(1 + annualRate, periods)) * (annualRate / (1 - Math.pow(1 + annualRate, -periods)))); // With Present Value

//     return (-1 * paymentWithPv.toFixed(2))
// }



export function calculatePayments(presentValue, futureValue, annualRate, periods) {

    annualRate /= 100;

    const paymentPerPeriod = presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)));

    const paymentWithFv = futureValue * annualRate / (Math.pow(1 + annualRate, periods) - 1);

    const paymentWithPv = paymentPerPeriod + paymentWithFv;

    return (-1 * paymentWithPv.toFixed(2))
}

// in progress..




//   function cal_pmt() {
//     //Annuity

//     n = parseFloat(document.forms[0].number.value);
//     pv = parseFloat(document.forms[0].pv.value);
//     rate = parseFloat(document.forms[0].rate.value);
//     fv = parseFloat(document.forms[0].fv.value);
//     ioy = parseInt(document.forms[0].ioy.value);

//     rate = rate / ioy;

//     rate = rate + 1;

//     total = pv + fv;

//     total = total / ((1 - Math.pow(rate, -n))/(rate-1))
//     direction = pv / pv;
//     total = - direction * total;

//     document.forms[0].pmt.value = total;
// }