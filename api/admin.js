const loginForm = document.getElementById('contact')
const loginMessage = document.getElementById('login-err')

loginForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const username = document.getElementById('email').value
  const password = document.getElementById('password').value

  // Send the username and password to your backend API for verification
  fetch('https://your-backend-api.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        loginMessage.textContent = 'Login successful!'
        // Redirect to 'index.js' after a successful login
        window.location.href = 'admin-home.js' // Replace 'index.js' with the actual URL of your destination page
      } else {
        loginMessage.textContent = 'Login failed. Please check your credentials.'
      }
    })
    .catch((error) => {
      loginMessage.textContent = 'An error occurred during the login process.'
      console.error(error)
    })
})
