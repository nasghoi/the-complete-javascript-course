//  npm init -y
// npm install prompt-sync

const prompt = require('prompt-sync')()

// let init_amount = 20000
// let monthly_contribution = 400
// let number_of_years = 30
// let interest_rate = 10

function compoundInterest(init, monthly, num_years, interest) {
    let total = init
    let annual_contribution = monthly * 12

    for (let i = 0; i < num_years; i++) {
        total += annual_contribution
        total *= ((100 + interest) / 100)
        
    }
    return total.toFixed(2)
}

function calculateRegular(init, monthly, num_years) {
    return (init * monthly * 12 * num_years).toFixed(2)
}

function printOutput(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate)
    let value_wo_compound = calculateRegular(init_amount, monthly_contribution, number_of_years)

    let summary = `
    INIT AMOUNT: RM ${init_amount.toFixed(2)}\n
    MONTHLY CONTRIBUTION: RM ${monthly_contribution.toFixed(2)}\n
    NUMBER OF YEARS: ${number_of_years}\n
    INTEREST RATE: ${interest_rate.toFixed(2)}%\n
    FINAL COMPOUNDED VALUE: RM ${final_value}\n
    REGULAR AMOUNT: RM ${value_wo_compound}\n
    DIFFERENCE: ${(final_value - value_wo_compound).toFixed(2)}\n`

    console.log(summary)
}

function run() {
    let init_amount = parseFloat(prompt('Enter initial amount (RM) : ') ?? 0.00)
    let monthly_contribution = parseFloat(prompt('Enter monthly contribution (RM) : ') ?? 0.00)
    let number_of_years = parseInt(prompt('Enter number of years : ') ?? 0)
    let interest_rate = parseFloat(prompt('Enter interest rate (%) : ') ?? 0.00)

    printOutput(init_amount, monthly_contribution, number_of_years, interest_rate)
}

run()