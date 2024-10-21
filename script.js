let firstName = document.getElementById("first-name");
let firstNameError = document.getElementById("first-name-error");
let lastName = document.getElementById("last-name");
let lastNameError = document.getElementById("last-name-error");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let message = document.getElementById("message");
let messageError = document.getElementById("message-error");
let checkbox = document.getElementById("checkbox");
let checkboxError = document.getElementById("checkbox-error");
let queryError = document.getElementById("query-error");
let general = document.getElementById("label-general");
let support = document.getElementById("label-support");
let generalRadio = document.getElementById("general");
let supportRadio = document.getElementById("support");
let query = false;
let successBox = document.getElementById("success-box");

function focus(inputId, errorId) {
  let id = document.getElementById(inputId);
  let error = document.getElementById(errorId);
  id.classList.remove("border-red-500");
  error.style.display = "none";
}

firstName.addEventListener("focus", () => {
  firstNameError.style.display = "none";
  firstName.classList.remove("border-red-500");
});
lastName.addEventListener("focus", () => {
  lastNameError.style.display = "none";
  lastName.classList.remove("border-red-500");
});
email.addEventListener("focus", () => {
  emailError.style.display = "none";
  email.classList.remove("border-red-500");
});
message.addEventListener("focus", () => {
  messageError.style.display = "none";
  message.classList.remove("border-red-500");
});
checkbox.addEventListener("change", () => {
  checkboxError.style.display = "none";
  checkbox.classList.remove("border-red-500");
});
generalRadio.addEventListener("change", () => {
  queryError.style.display = "none";
});
support.addEventListener("change", () => {
  queryError.style.display = "none";
});

function updateBackground(selected) {
  general.classList.remove("checkbox-bg");
  support.classList.remove("checkbox-bg");
  general.classList.remove("box");
  support.classList.remove("box");

  if (selected === "general") {
    general.classList.add("checkbox-bg");
    general.classList.add("box");
  } else {
    support.classList.add("checkbox-bg");
    support.classList.add("box");
  }
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!firstName.validity.valid) {
    firstNameError.style.display = "block";
    firstName.classList.add("border-red-500");
  }
  if (!lastName.validity.valid) {
    lastNameError.style.display = "block";
    lastName.classList.add("border-red-500");
  }
  if (!email.validity.valid) {
    emailError.style.display = "block";
    email.classList.add("border-red-500");
  }
  if (!message.validity.valid) {
    messageError.style.display = "block";
    message.classList.add("border-red-500");
  }
  if (!checkbox.validity.valid) {
    checkboxError.style.display = "block";
    checkbox.classList.add("border-red-500");
  }
  if (!generalRadio.validity.valid & !supportRadio.validity.valid) {
    queryError.style.display = "block";
  }
  if (generalRadio.validity.valid || supportRadio.validity.valid) {
    query = true;
    queryError.style.display = "none";
  }
  if (
    firstName.validity.valid &
    lastName.validity.valid &
    email.validity.valid &
    message.validity.valid &
    checkbox.validity.valid &
    query
  ) {
    successBox.style.display = "flex";
  }
});

document.getElementById("back").addEventListener("click", () => {
  successBox.style.display = "none";
});