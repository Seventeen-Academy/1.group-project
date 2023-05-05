let submit = document.getElementById('formLogin')

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

