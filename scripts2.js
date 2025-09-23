const dolarToday = 5.33
const euroToday = 6.26
const bitToday = 601202.23
const libraToday = 7.17

const currencySelect = document.querySelector(".currency-select")
const ConvertButton = document.querySelector(".convert-button")
const mySelector = document.querySelector(".currency-select")

function valoresChange(){
        const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")
 
if(mySelector.value == "dolar"){
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD"
    }).format(inputCurrencyValue)

valueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue * dolarToday)
}

if(mySelector.value == "euro"){
    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style:"currency",
    currency:"EUR"
    }).format(inputCurrencyValue)

valueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue * euroToday)
}


if(mySelector.value == "libra"){
    valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
    style:"currency",
    currency:"GBP"
    }).format(inputCurrencyValue)

valueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue * libraToday)
}


if(mySelector.value == "bitcoin"){
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BTC"
    }).format(inputCurrencyValue)

valueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue * bitToday)
}

}


function elementsChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}

if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
}

if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
}

valoresChange()
}



function meuLink(){
    window.location.href = "./index.html";
}


currencySelect.addEventListener("change", elementsChange)
ConvertButton.addEventListener("click", valoresChange)