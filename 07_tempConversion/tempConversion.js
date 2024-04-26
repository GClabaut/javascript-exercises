const convertToCelsius = function(fahr) {
  let celcius = ((fahr - 32) * (5 / 9)).toFixed(1);
  celcius = parseFloat(celcius);
  return celcius;
};

const convertToFahrenheit = function(celc) {
  let fahrenheit = ((celc * (9 / 5) + 32)).toFixed(1);
  fahrenheit = parseFloat(fahrenheit);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
