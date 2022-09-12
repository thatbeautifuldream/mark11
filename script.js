const date = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function checkBirthDateIsLucky() {
  const dob = date.value;
  console.log(dob);
  const sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else output.innerText = "Please enter both the fields";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) output.innerText = "Your birthday is lucky 🥳";
  else output.innerText = "Your birthday is not lucky 😢";
}

checkButton.addEventListener("click", checkBirthDateIsLucky);
