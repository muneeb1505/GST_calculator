function calculate() {
    let amount = parseFloat(document.getElementById('amount').value);
    let gst_per = parseFloat(document.getElementById('per').value);

    if (!isNaN(amount)) {
        let gst = (amount * gst_per) / 100;
        let gst_amt = amount + gst;
        document.getElementById('res').innerHTML = `${gst_amt}`;
    }
    else {
        alert("Please Enter amount first !");
    }
}