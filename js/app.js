function getPin() {
    const pin = generatePin();
    const pinStr = pin + '';
    if (pinStr.length === 4) {

        return pin;
    }
    else {
        // console.log('three digit pin found', pin);
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const disPin = document.getElementById('display-pin');
    disPin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumbersfield = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersfield.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersfield.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainngDigits = digits.join('');
            typedNumbersfield.value = remainngDigits;

        }

    }
    else {


        const newTypedNumber = previousTypedNumber + number;
        typedNumbersfield.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const disPlayPinField = document.getElementById('display-pin');
    const currentPin = disPlayPinField.value;

    const typedNumberPin = document.getElementById('typed-numbers');
    const typedNumber = typedNumberPin.value;


    const successPinMsg = document.getElementById("pin-success");
    const failedPinMsg = document.getElementById("not-matched");
    if (currentPin == typedNumber) {

        successPinMsg.style.display = 'block';
        failedPinMsg.style.display = 'none';
    }
    else {

        failedPinMsg.style.display = 'block';
        successPinMsg.style.display = 'none';
    }

})


