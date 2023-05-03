let submit = document.getElementById('formLogin')

submit.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch(`https://6451d89fbce0b0a0f736af1a.mockapi.io/users?email=${email}&password=${password}`)
        .then(response => response.json())
        .then(users => {
        console.log(users);
        // Mengambil input dari pengguna

        if (users.length > 0) {
            const value = JSON.stringify(users[0])
            localStorage.setItem('session', value);
            window.location.href = "../index.html"
            
        } else {
            document.getElementById('message').textContent = 'Email atau Password salah!';
        }
        });
})

