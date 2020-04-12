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

//Sum product for total loan and interest rate
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

//Calculate Current Loan Metrics
function calculate_current_loan_metrics() {
    calculate_outstanding_balance();
    calculate_aggregate_rate();
    calculate_monthly_balance();
}


//TODO:  Build table with JQuery
var out_bal_test_array = [
    '13677.08',
    '27956.22',
    '23299.47',
    '31796.78',
    '21951.27',
    '',
    '',
    ''
]

var int_rate_test_array = [
    '5.125',
    '6.59',
    '5.59',
    '6.06',
    '5.06',
    '',
    '',
    ''
]

var mon_payment_array = [
    '65.25',
    '171.78',
    '121.59',
    '179.9',
    '103.75',
    '',
    '',
    ''
]

var first_row =
    `<!-- First Row -->
    <tr>
        <th scope="row">Sallie Mae</th>
        <td>5,000.00</td>
        <td>11.89</td>
        <td>555.55</td>
    </tr>`

var last_row =
    `<!-- Final Row -->
    <tr>
        <th scope="row">Aggregates</th>
        <td id="totOutBalance">5,000.00</td>
        <td id="tot_rate">11.89</td>
        <td id="tot_monthly_payment">555.55</td>
    </tr>
    `

var table_test = ''
for (i = 0; i < 8; i++) {
    table_test +=
        `<!-- Row ${i} -->
        <tr>
            <!--Loan ${i} Name -->
            <th scope="row">
                <input type="text" class="form-control" placeholder="Loan ${i}" aria-label="Username">
            </th>

            <!--Oustanding Balance -->
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control balance"
                        aria-label="Amount (to the nearest dollar)"
                        value="${out_bal_test_array[i]}">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </td>

            <!-- Annual Interest Rate  -->
            <td>
                <div class="input-group mb-3">
                    <input type="text" class="form-control interest_rate" aria-label="Percent"
                    value="${int_rate_test_array[i]}">
                    <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
            </td>

            <!-- Monthly Payment  -->
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control monthly_payment" aria-label="Amount (to the nearest dollar)"
                    value="${mon_payment_array[i]}">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>

            </td>
        </tr>
    `
}

//load document and begin by displaying the random number to match
$(document).ready(function() {
    $('#loan_table').append(
        first_row +
        table_test +
        last_row
    );
});


//Refinance Loan Section 
var principal = get_refi_principal();
var rate = get_refi_int_rate();
var num_years = get_refi_loan_years();
var num_annual_payments = calculate_frequency();
var sched_payment = payment_per_period();
var num_tot_payments = get_refi_loan_years() * calculate_frequency();
var tot_refi_interest = get_refi_principal() - (payment_per_period() * (get_refi_loan_years() * calculate_frequency()))


function get_refi_principal() {
    if (document.getElementById("refi_amt") != null) {
        return document.getElementById("refi_amt").value;
    }
}

function get_refi_int_rate() {
    if (document.getElementById("interest_rate") != null) {
        return document.getElementById("interest_rate").value;
    }
}

function get_refi_loan_years() {
    if (document.getElementById("loan_years") != null) {
        return document.getElementById("loan_years").value
    }
}

function calculate_frequency() {
    var freq = 0;

    if (document.getElementById("payment_frequency") != null) {

        payment_frequency = document.getElementById("payment_frequency").value

        if (payment_frequency == "Bi-Monthly") {
            freq = 24;
        } else if (payment_frequency == "Monthly") {
            freq = 12;
        } else if (payment_frequency == "Quarterly") {
            freq = 4;
        } else if (payment_frequency == "Annually") {
            freq = 1;
        } else {
            freq = 0;
        }
    }
    return freq;
}

function payment_per_period(principal, rate, num_annual_payments, num_years) {

    let p = principal;
    let r = rate / 100 / num_annual_payments;
    let n = num_years * num_annual_payments;

    return p * (r * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n) - 1))

}

function pub_refi_terms() {
    document.getElementById("refi_sched_payment").innerHTML = payment_per_period();
    document.getElementById("num_refi_total_payments").innerHTML = num_tot_payments;
    document.getElementById("total_refi_interest").innerHTML = tot_refi_interest;
}