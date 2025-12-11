let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
  sumEl.textContent = "Sum: " + (num1 + num2)
}

function subtract() {
  sumEl.textContent = "Sum: " + (num1 - num2)
}

function divide() {
  sumEl.textContent = "Sum: " + (num1 / num2)
}

function multiply() {
  sumEl.textContent = "Sum: " + (num1 * num2)
}

document.getElementById("add-btn").addEventListener("click", add)
document.getElementById("subtract-btn").addEventListener("click", subtract)
document.getElementById("divide-btn").addEventListener("click", divide)
document.getElementById("multiply-btn").addEventListener("click", multiply)