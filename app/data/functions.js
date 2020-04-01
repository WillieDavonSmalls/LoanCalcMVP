
function calculateTotals() {
    oBArray = document.getElementsByClassName("balance")
    oBTotal = 0;

    for (var i = 0; i < oBArray.length; i++) {
        if (parseInt(oBArray[i].value))
            oBTotal += parseInt(oBArray[i].value);
        console.log(oBTotal);

    }
    document.getElementById("totOutBalance").innerHTML = 3000
}