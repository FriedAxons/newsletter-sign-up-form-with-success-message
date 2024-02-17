const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const textContent = document.querySelector(".text-content");
const newsletterImage = document.querySelector(".newsletter-image");

subscribeBtn.addEventListener("click", function (event) {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("invalid");
    errorMessage.classList.add("active");
    event.preventDefault();
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.classList.remove("active");
  }
});

emailInput.addEventListener("input", function () {
  emailInput.classList.remove("invalid");
  errorMessage.classList.remove("active");
});

// Handle form submission event (specifically in this case to handle the success message)
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (event) {
    if (emailInput.checkValidity()) {
      textContent.style.display = "none";
      newsletterImage.style.display = "none";
      // The form is valid, show the success message
      successMessage.style.display = "block";
    }
    event.preventDefault(); // Prevent the default form submission
  });
