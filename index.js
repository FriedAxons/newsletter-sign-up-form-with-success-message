const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const errorMessage = document.querySelector(".error-message");

subscribeBtn.addEventListener("click", function () {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("invalid");
    errorMessage.classList.add("active");
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.classList.remove("active");
  }
});

emailInput.addEventListener("input", function () {
  emailInput.classList.remove("invalid");
  errorMessage.classList.remove("active");
});
