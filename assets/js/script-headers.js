const btnUser = document.getElementById("btnUser");
const btnLogin = document.getElementById("btnLogin");

let users = getSession();

if (users.status) {
  btnUser.classList.remove("btn-wrapper-none");
  btnLogin.classList.add("btn-wrapper-none");

  document.querySelector("#btnUser button a").text = users.profile.name;
  document.querySelector("#btnUser button img").src = users.profile.img;
}

btnUser.addEventListener("click", function () {
  localStorage.removeItem("session");
  window.location.reload();
});

function checkLoginButton() {
  if (users.status) {
    window.location.href = "../pages/form-laporan.html"
  } else {
    Swal.fire({
      title: 'Anda Harus Login Terlebih Dahulu!',
      icon: 'error',
      confirmButtonText: 'OK'
    }).then(function(){
      window.location.href = "../pages/login.html"
    })
  }
}