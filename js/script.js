{
    const calculateResult = (plnAmount, currency) => {
        const eurRate = 4.68;
        const usdRate = 4.22;
        const gbpRate = 5.55;

        switch (currency) {
            case "USD":
                return plnAmount / usdRate;

            case "EUR":
                return plnAmount / eurRate;

            case "GBP":
                return plnAmount / gbpRate;
        }
    };
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-amountResult");
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-plnAmount");
        const currencyElement = document.querySelector(".js-currency");

        const plnAmount = +amountElement.value;
        let currency = currencyElement.value;

        const result = calculateResult(plnAmount, currency);
        updateResultText(result)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

}