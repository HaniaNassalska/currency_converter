const eurRate = 4.68;
const usdRate = 4.22;
const gbpRate = 5.55;
let amountElement = document.querySelector(".js-plnAmount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-amountResult");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnAmount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = plnAmount / usdRate;
            break;

        case "EUR":
            result = plnAmount / eurRate;
            break;

        case "GBP":
            result = plnAmount / gbpRate;
            break;
    }
   resultElement.innerText = result.toFixed(2)
});