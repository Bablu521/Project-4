let userName = document.querySelector("#username");
let userEmail = document.querySelector("#useremail");
let password = document.querySelector("#password");
let signupBtn = document.querySelector("#signupBtn");

// Saving User INFO in loaclstorage

signupBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (userEmail.value != "" && userName.value != "" && password.value != "") {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("useremail", userEmail.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 500);
  } else {
    alert("Please Enter All Data !");
  }
}
