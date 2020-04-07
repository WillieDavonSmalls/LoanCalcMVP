//Calculate the Totals for Outstaninding balance
function calculate_outstanding_balance() {
    array = document.getElementsByClassName("balance")
    total = 0;

    for (var i = 0; i < array.length; i++) {
        if (parseFloat(array[i].value)) {
            total += parseFloat(array[i].value);
        }
    }
    document.getElementById("totOutBalance").innerHTML = total
}

//Calculate the total for the monthly payments
function calculate_monthly_balance() {
    array = document.getElementsByClassName("monthly_payment")
    total = 0;

    for (var i = 0; i < array.length; i++) {
        if (parseFloat(array[i].value)) {
            total += parseFloat(array[i].value);
        }
    }
    document.getElementById("tot_monthly_payment").innerHTML = total
}

//TODO: Sum product for total loan and interest rate
function calculate_aggregate_rate() {
    array0 = document.getElementsByClassName("balance")
    array1 = document.getElementsByClassName("interest_rate")
    total0 = 0;
    total1 = 0;

    for (var i = 0; i < array.length; i++) {
        if (parseFloat(array0[i].value) && parseFloat(array1[i].value)) {
            total0 += parseFloat(array0[i].value) * parseFloat(array1[i].value);
            total1 += parseFloat(array0[i].value);
        }
    }
    document.getElementById("tot_rate").innerHTML = (total0 / total1)
}

//TODO:  Build table with JQuery
out_bal_test_array = [
    '13677.08',
    '27956.22',
    '23299.47',
    '31796.78',
    '21951.27'
]

int_rate_test_array = [
    '5.125',
    '6.59',
    '5.59',
    '6.06',
    '5.06'
]

mon_payment_array = [
    '65.25',
    '171.78',
    '121.59',
    '179.9',
    '103.75'
]