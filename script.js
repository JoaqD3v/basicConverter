document.getElementById("currencyConverter").addEventListener("submit", function (event) {
  event.preventDefault();
  
  let amountInDollars = parseFloat(document.getElementById("amount").value);
  
  // Tasa de cambio ficticia (1 dólar estadounidense = 1100 ARS)
  let tasaArsADolar = 1100;
  
  let amountInArs = amountInDollars * tasaArsADolar;
  
  document.getElementById("result").innerHTML = `${amountInDollars} dólares son equivalentes a ${amountInArs} pesos argentinos.`;
});


document.getElementById("temperatureConverter").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const tempCelsius = parseFloat(document.getElementById("tempCelsius").value);
  
  const tempFahrenheit = (tempCelsius * 9/5) + 32;
  
  document.getElementById("result_temperatura").innerHTML = `${tempCelsius} grados Celsius son equivalentes a ${tempFahrenheit} grados Fahrenheit.`;
});
