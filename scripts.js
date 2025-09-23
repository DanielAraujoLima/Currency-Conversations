const ConvertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const dolarToday = 5.33
const euroToday = 6.26
const bitToday = 601202.23
const libraToday = 7.17

function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")

    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value =="libra"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin"){
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BTC",
        }).format(inputCurrencyValue / bitToday)
    }


    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function newvalue() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png" 
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertvalues()
}

function meuLink(){
    window.location.href = "./index2.html";
}


currencySelect.addEventListener("change", newvalue)
ConvertButton.addEventListener("click", convertvalues)
