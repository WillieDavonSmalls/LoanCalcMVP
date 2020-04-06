//Calculate the Totals for Outstaninding balance
function calculate_outstanding_balance() {
    array = document.getElementsByClassName("balance")
    total = 0;

    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i].value))
            total += parseInt(array[i].value);
    }
    document.getElementById("totOutBalance").innerHTML = total
}

//Calculate the total for the monthly payments
function calculate_monthly_balance() {
    array = document.getElementsByClassName("monthly_payment")
    total = 0;

    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i].value))
            total += parseInt(array[i].value);
    }
    document.getElementById("tot_monthly_payment").innerHTML = total
}

//TODO: Sum product for total loan and interest rate