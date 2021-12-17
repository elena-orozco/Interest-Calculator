const principalBox = document.querySelector("#principal")
const interestRateSlider = document.querySelector ("#interestRate")
const interestPercentage = document.querySelector("#interestPercentage")
const timesCompoundedBox = document.querySelector ("#timesCompounded")
const totalYearsBox = document.querySelector("#totalYears")
const interestSpan = document.querySelector("#amountSpan")

function computeInterest() {
  const principal = principalBox.value
  const interestRate = interestRateSlider.value
  const timesCompounded = timesCompoundedBox.value
  const totalYears = totalYearsBox.value
  const interest = principal * ((1 + ((interestRate/100)/timesCompounded))**(timesCompounded * totalYears))
  interestSpan.textContent = "$" + interest.toFixed(2)
}

function displayPercentage() {
  interestPercentage.textContent = interestRateSlider.value + "%";
}

principalBox.addEventListener('input', computeInterest)
interestRateSlider.addEventListener('input', computeInterest)
interestRateSlider.addEventListener('input', displayPercentage)
timesCompoundedBox.addEventListener('input', computeInterest)
totalYearsBox.addEventListener('input', computeInterest)