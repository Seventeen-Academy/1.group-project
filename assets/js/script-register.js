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

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('password-2').value;

  return {
    name:name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };
}

function validateForm(formData) {
  if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword){
    return false;
  }
  return true;
}

// function submit() {
//   const warning = document.getElementById("warning");
//   if (!validateForm(handleGetFormData())) {
// 
//   }
// }



