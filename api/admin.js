const loginForm = document.getElementById('contact')
const loginMessage = document.getElementById('login-err')

loginForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  // Send the username and password to your backend API for verification
  fetch('http://127.0.0.1:8080/user?email=' + email + '&password=' + password, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
})

    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        loginMessage.textContent = 'Login successful!'
        // Redirect to 'index.js' after a successful login
        window.location.href = 'admin-home.html' // Replace 'index.js' with the actual URL of your destination page
      } else {
        loginMessage.textContent = 'Login failed. Please check your credentials.'
      }
    })
    .catch((error) => {
      loginMessage.textContent = 'An error occurred during the login process.'
      console.error(error)
    })
})
