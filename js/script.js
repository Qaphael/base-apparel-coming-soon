const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");
const button = document.querySelector(".btn");
const inputField = document.querySelector(".input");

function ValidateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputField.value.match(mailformat)) {
    console.log("done validating");
    errorIcon.classList.remove("active");
    errorText.classList.remove("active");
  } else {
    console.log("not validated");
    errorIcon.classList.add("active");
    errorText.classList.add("active");
  }
}

button.addEventListener("click", ValidateEmail);
