const eurRate = 4.68;
let plnAmountElement = document.querySelector(".js-form__plnAmount");
let eurResultElement = document.querySelector(".js-form__eurResult");
let formElement = document.querySelector(".js-form");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let plnAmount = plnAmountElement.value;
    let eurResult = plnAmount / eurRate;
    eurResultElement.innerText = eurResult.toFixed(2)

});