let userTitle = document.querySelector("#usertitle");
let userInfo = document.querySelectorAll(".userinfo");
let noUser = document.querySelectorAll(".nouser");
let logoutBtn = document.querySelector("#logoutBtn");
let userName = localStorage.getItem("username");

if (userName) {
  userTitle.innerHTML = userName;
  userInfo[0].style.display = "block";
  userInfo[1].style.display = "block";
  noUser[0].remove();
  noUser[1].remove();
}

logoutBtn.addEventListener("click", logout);

function logout() {
  setTimeout(() => {
    window.location = "register.html";
  }, 0);
  localStorage.clear();
}
