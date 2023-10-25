document.getElementById('contact').addEventListener('submit', function (event) {
  event.preventDefault()

  // Prepare the data to be sent in the PATCH request

  const data = {
    adrs1: document.getElementById('adrs1').value,
    adrs2: document.getElementById('adrs2').value,
    adrs3: document.getElementById('adrs3').value,
    cty: document.getElementById('cty').value,
    stat: document.getElementById('stat').value,
    country: document.getElementById('country').value,
    phone1: document.getElementById('phone1').value,
    phone2: document.getElementById('phone2').value,
    email: document.getElementById('email').value
  }

  const cleanedData = removeEmptyProperties(data)

  // Make a PATCH request to your API endpoint
  fetch('https://your-api-endpoint.com/update-company-address', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
      // You can include other headers as needed
    },
    body: JSON.stringify(cleanedData)
  })
    .then((response) => {
      if (response.ok) {
        // Handle success, e.g., show a success message
        alert('Company address updated successfully.')
      } else {
        // Handle errors, e.g., show an error message
        alert('Failed to update company address.')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Failed to update company address.')
    })
})

function removeEmptyProperties(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key].trim() === '') {
        delete obj[key]
      }
    }
  }
  return obj
}

document.getElementsByClassName('add-testa').addEventListener('submit', function (event) {
  event.preventDefault()

  // Prepare the data to be sent in the POST request
  const data = {
    name: document.getElementById('name').value,
    designation: document.getElementById('designation').value,
    message: document.getElementById('message').value
  }

  // Make a POST request to your API endpoint
  fetch('https://your-api-endpoint.com/add-testimonial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // You can include other headers as needed
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (response.ok) {
        // Handle success, e.g., show a success message
        alert('Testimonial added successfully.')
      } else {
        // Handle errors, e.g., show an error message
        alert('Failed to add testimonial.')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
})
