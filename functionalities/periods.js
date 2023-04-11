
//CURRENTLY IN PROGRESS...

// export function calculatePeriods(presentValue, annualInvestment, futureValue, interestRate) {

//     let currentAmount = Number(-presentValue);
//     let payment = Number(-annualInvestment);
//     let finalAmount = Number(futureValue);
//     let years = 0;

//     while (currentAmount < finalAmount) {
//         debugger
//         currentAmount += payment;
//         currentAmount *= Number(1 + (interestRate / 100));
//         years++;
//     }

//     return years;
// }




export function calculatePeriods(presentValue, annualInvestment, futureValue, interestRate) {

    let currentAmount = Number(-presentValue);
    let payment = Number(-annualInvestment);
    let finalAmount = Number(futureValue);
    let years = 0;

    while (currentAmount < finalAmount) {

        let lastCurrentAmount = currentAmount;

        currentAmount += payment;
        currentAmount *= Number(1 + (interestRate / 100));
        

        if (currentAmount >= finalAmount) {

            // let fractionalYears = (finalAmount - currentAmount) / payment;
            // let fractionalPart = years = years - Math.floor(years); 0

            let gornica = currentAmount - finalAmount;
            let lastPayment = (payment - gornica);



            debugger

            // return (years - fractionalYears);
        }

        years++

    }

}