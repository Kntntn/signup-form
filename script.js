function validateForm() {
  var fnameInput = document.forms["form"]["fname"].value;
  var lnameInput = document.forms["form"]["lname"].value;
  var emailInput = document.forms["form"]["email"].value;
  var passwordInput = document.forms["form"]["password"].value;

  fname = document.getElementById("fname");
  fnameError = document.getElementById("fnameError");

  error = false;

  if (fnameInput == "") {
    fname.style.borderColor = "red";
    fname.style.marginBottom = "0";
    fname.color = "red";
    fnameError.textContent = "First Name cannot be empty";
    fnameError.style.display = "block";
    error = true;
  } else {
    fname.removeAttribute("style");
    fnameError.style.display = "none";
    error = false;
  }

  if (lnameInput == "") {
    lname.style.borderColor = "red";
    lname.style.marginBottom = "0";
    lname.color = "red";
    lnameError.textContent = "Last Name cannot be empty";
    lnameError.style.display = "block";
    error = true;
  } else {
    lname.removeAttribute("style");
    lnameError.style.display = "none";
    error = false;
  }

  if (emailInput == "") {
    email.style.borderColor = "red";
    email.style.marginBottom = "0";
    email.color = "red";
    emailError.textContent = "Email cannot be empty";
    emailError.style.display = "block";
    error = true;
  } else {
    email.removeAttribute("style");
    emailError.style.display = "none";
    error = false;
  }

  if (passwordInput == "") {
    password.style.borderColor = "red";
    password.style.marginBottom = "0";
    password.color = "red";
    passwordError.textContent = "Password cannot be empty";
    passwordError.style.display = "block";
    error = true;
  } else {
    password.removeAttribute("style");
    passwordError.style.display = "none";
    error = false;
  }

  if (error === true) {
    return false;
  }
}
