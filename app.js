const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Event listeners

currencyEl_one.addEventListener('click', exchange);
currencyEl_two.addEventListener('click', exchange);
amountEl_one.addEventListener('input', exchange);
amountEl_two.addEventListener('input', exchange);

function exchange() {
    currency_one = currencyEl_one.value;
    currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            console.log(rate);
            rateEl.innerText = `1 ${currency_one} =${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate);
        })
}

swap.addEventListener('click', () => {
    val1 = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = val1;
    exchange();
})

exchange();
