const number = document.getElementById("number");
const Temperature = document.getElementById("Temperature");
const selection = document.getElementById("selection");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  let numbers = Number(number.value);
  console.log(Temperature.value, selection.value);

  if (Temperature.value === "cels" && selection.value === "fahrenheit") {
    result.textContent = (numbers * 9) / 5 + 32 + "°F";
  } else if (Temperature.value === "cels" && selection.value === "celsius") {
    result.textContent = numbers + "°C";
  } else if (Temperature.value === "faranh" && selection.value === "celsius") {
    result.textContent = (numbers - 32) * 5 / 9 + "°C";
  } else {
    result.textContent = numbers + "°F";
  }
})
