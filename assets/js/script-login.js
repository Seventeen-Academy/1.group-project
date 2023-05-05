let submit = document.getElementById('formLogin')
const getSession = localStorage.getItem("session");
console.log(getSession);

submit.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch(`https://6451d89fbce0b0a0f736af1a.mockapi.io/users?email=${email}`)
        .then(response => response.json())
        .then(users => {

        if (users.length > 0 && users[0].password == password) {
            const value = JSON.stringify(users[0])
            localStorage.setItem('session', value);
            localStorage.setItem('status', true)
            window.location.href = "../index.html"
            
        } else {
            Swal.fire({
                title: 'Email atau password yang anda input salah!',
                text: 'Silahkan coba lagi',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
        });
})

function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }
