let errorEl = document.getElementById("error")
let purchaseBtn = document.getElementById("purchase-btn")

purchaseBtn.addEventListener("click", function() {
  errorEl.textContent = "Something went wrong, please try again"
})