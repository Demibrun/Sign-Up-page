function generetePin() {
    let pin = ''
    for (let index = 0; index < 15; index++) {
        let randomNum = Math.floor(Math.random() * 10)
        pin = pin + randomNum
    }
    document.getElementById('pin').innerText = pin;
}

function loadCard() {
    const provider = document.getElementById('provider').value;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').innerText;
    const loadInput = document.getElementById('loadInput').value;

    if (provider && amount && pin && loadInput === `*310*${pin}#`) {
        alert(`Successfully loaded ${amount} naira for ${provider}`);
    } else {
        alert('Invalid input or pin. Please try again.');
    }
}
