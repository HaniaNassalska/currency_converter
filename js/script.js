let amountElement = document.querySelector(".js-form__plnAmount");
let resultElement = document.querySelector(".js-form__amountResult");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector("js-currencyOption");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let eurRate = 4.68;
    let usdRate = 4.22;
    let gbpRate = 5.55;

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
    console.log = result.toFixed(2);

});