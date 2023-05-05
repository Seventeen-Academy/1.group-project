const btnUser = document.getElementById("btnUser");
const btnLogin = document.getElementById("btnLogin");

let users = JSON.parse(localStorage.getItem("session"));
if (users) {
  btnUser.classList.remove("btn-wrapper-none");
  btnLogin.classList.add("btn-wrapper-none");

  document.querySelector("#btnUser button a").text = users.name;
  // document.querySelector("#btnUser button a").href =
  //   "pages/register.html";
  document.querySelector("#btnUser button img").src = users.img;
}

btnUser.addEventListener("click", function () {
  localStorage.removeItem("session");
  window.location.reload();
  // window.location.href = "../index.html"
});