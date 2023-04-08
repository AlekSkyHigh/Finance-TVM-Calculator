export function calculatePayments(presentValue, futureValue, annualRate, periods) {

    annualRate /= 100;

    const paymentNoPv = futureValue * (annualRate / (Math.pow(1 + annualRate, periods) - 1)); //works

    const paymentWithPv = (presentValue * (annualRate / (1 - Math.pow(1 + annualRate, -periods)))) + ((futureValue / Math.pow(1 + annualRate, periods)) * (annualRate / (1 - Math.pow(1 + annualRate, -periods)))); // With Present Value

    return (-1 * paymentWithPv.toFixed(2))
}