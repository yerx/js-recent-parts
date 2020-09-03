/*
Tag a template literal by adding a function in front of the template literal. In this example, the function formatCurrency, which is tagged to the template literal, will take the amount variable and convert it into USD currency.
*/

var amount = 12.3;

var msg = formatCurrency`The total for your order is ${amount}`;

function formatCurrency(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += `$${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
      str += strings[i];
    }
  }
  return str;
}

console.log(msg);
