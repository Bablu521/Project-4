let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let signinBtn = document.querySelector("#signinBtn");
let savedUserName = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");


signinBtn.addEventListener("click", login);

function login (e) {
  e.preventDefault();
  if (
    userName.value.trim() === savedUserName &&
    password.value.trim() === savedPassword
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("User Name or Password is INCORRECT !");
  }
}
