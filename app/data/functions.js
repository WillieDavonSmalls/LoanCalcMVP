
function calculateTotals(){
    oBArray = document.getElementsByClassName("balance")
    function findOBalance() {
        oBTotal = 0;
        for (var i = 0; i < oBArray.length; i++) {
            if (parseInt(oBArray[i].value))
                oBTotal += parseInt(oBArray[i].value);
        }
        return oBTotal;
    }
    document.getElementById("totOutBalance").innerHTML = "3,000.00"
}