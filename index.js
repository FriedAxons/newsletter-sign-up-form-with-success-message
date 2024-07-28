const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const mainContent = document.querySelector("main");
const newsletterImage = document.querySelector(".newsletter-image");
const mobileNewsletterImage = document.querySelector(
  ".mobile-newsletter-image"
);
const dismissButton = document.querySelector(".dismiss-button");

dismissButton.addEventListener("click", () => {
  // Remove the "visible" class from the success message to hide it
  successMessage.classList.remove("visible");

  emailInput.value = "";

  if (window.innerWidth > 375) {
    // Show the original main content for desktop version
    mainContent.style.display = "flex";
    newsletterImage.style.display = "block";
    mobileNewsletterImage.style.display = "none";
  } else {
    mainContent.style.display = "flex";
    newsletterImage.style.display = "none";
    mobileNewsletterImage.style.display = "block";
  }
});

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
    // Prevent the default form submission
    // You're telling the browser not to execute its default behavior associated with form submission. Instead, you can handle the form submission manually using JavaScript.
    event.preventDefault();

    // Get the entered email address from the input field
    const enteredEmail = emailInput.value;

    // Update the content of the email address span inside of the success message
    const emailAddressSpan = document.querySelector(".email-address");
    emailAddressSpan.textContent = enteredEmail;

    if (emailInput.checkValidity()) {
      mainContent.style.display = "none";
      newsletterImage.style.display = "none";
      // The form is valid, show the success message
      successMessage.classList.toggle("visible");
    }
  });
