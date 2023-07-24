var signupBtn = document.getElementById("signupBtn");
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var loginAnchor = document.getElementById("loginAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  var user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    swal({
      text: "Please fill in all fields",
    });
    return;
  }

  if (
    isValidEmail(signupEmailInput.value) &&
    isNewEmail(signupEmailInput.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    swal({
      text: "Sign up successful",
    });
  } else {
    swal({
      text: "Invalid email or email already in use",
    });
  }
}

signupBtn.addEventListener("click", function () {
  signUp();
});

function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isNewEmail(email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});
