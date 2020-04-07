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
var out_bal_test_array = [
    '13677.08',
    '27956.22',
    '23299.47',
    '31796.78',
    '21951.27'
]

var int_rate_test_array = [
    '5.125',
    '6.59',
    '5.59',
    '6.06',
    '5.06'
]

var mon_payment_array = [
    '65.25',
    '171.78',
    '121.59',
    '179.9',
    '103.75'
]



var table_test = ''
for (i = 0; i < 8; i++) {
    table_test +=
        `<!-- Row ${i} -->
        <tr>
            <!--Loan ${i} Name -->
            <th scope="row">
                <input type="text" class="form-control" placeholder="Loan ${i} :" aria-label="Username">
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

var test =
    `<!-- Row Five -->
<tr>
    <!--Loan Name -->
    <th scope="row">
        <input type="text" class="form-control" placeholder="Loan 1 Name " aria-label="Username">
    </th>

    <!--Oustanding Balance -->
    <td>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control balance" aria-label="Amount (to the nearest dollar)"
            value="21951.27">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>

    </td>

    <!-- Annual Interest Rate  -->
    <td>
        <div class="input-group mb-3">
            <input type="text" class="form-control interest_rate" aria-label="Percent"
            value="5.06">                           
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
            value="65.25">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>
    </td>
</tr>`

$('#loan_table tr:last').after(test);