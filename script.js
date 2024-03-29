let api =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById('from-currency-select');
const toDropDown = document.getElementById('to-currency-select');

//create dropdown from the currency array
currencies.forEach((currency) => {
    const option = document.createElement("option")
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
})
currencies.forEach((currency) => {
    const option = document.createElement("option")
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
})

//setting default values
fromDropDown.value = "USD";
toDropDown.value = "LKR"

let convertCurrency = () => {
    //create reference
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0 ){

    }else{
        
    }
}