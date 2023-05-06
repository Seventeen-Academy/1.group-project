const submit = document.getElementById('formRegister');

submit.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmationPassword = document.getElementById('password-2').value

  if(password !== confirmationPassword) {
    Swal.fire({
      title: 'Password tidak sama!',
      text: 'Silahkan ketik password dengan benar dan sesuai',
      icon: 'error',
      confirmButtonText: 'OK'
    })
    return 0;
  }

  postData({
    url: 'https://6451d89fbce0b0a0f736af1a.mockapi.io/users', 
    data: 
      {
        name, email, password, img: "https://i.ibb.co/YN7zDFF/avatar.png", confirmationPassword
      }
  }).then (response =>{
    Swal.fire({
      title: 'Yeayy, Daftar Berhasil!',
      text: 'Ayo Login dan Selamat berpetualang, pahlawan!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(function(){
      window.location.href = "../pages/login.html"
    })
  }).catch((error) => {
    console.error('Error:', error.message);
  });
});

async function postData({ url = '', data = {}}) {
  await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
  }).then(async(result) => {
      if (result.status !== 200) {
          throw await result.json()
      } else {
          console.log('Success:', result);
      }
  }).catch((error) => {
      console.error('Error:', error.message);
  });
}

function password_show_hide_1() {
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

function password_show_hide_2() {
    var x = document.getElementById("password-2");
    var show_eye = document.getElementById("show_eye_2");
    var hide_eye = document.getElementById("hide_eye_2");
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
