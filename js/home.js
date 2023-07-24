var logOutBtn = document.getElementById("logOutBtn");
var welcomeUser = document.getElementById("userName");
var userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
