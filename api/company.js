// Add an event listener to capture the form submission
document.getElementById('upadteCompany').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Serialize the form data into a JSON object
    const formDataObject = {
        add1: document.getElementById('adrs1').value.trim() === '' ? null : document.getElementById('adrs1').value,
        add2: document.getElementById('adrs2').value.trim() === '' ? null : document.getElementById('adrs2').value,
        add3: document.getElementById('adrs3').value.trim() === '' ? null : document.getElementById('adrs3').value,
        city: document.getElementById('cty').value.trim() === '' ? null : document.getElementById('cty').value,
        state: document.getElementById('stat').value.trim() === '' ? null : document.getElementById('stat').value,
        country: document.getElementById('country').value.trim() === '' ? null : document.getElementById('country').value,
        phone1: document.getElementById('phone1').value.trim() === '' ? null : document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value.trim() === '' ? null : document.getElementById('phone2').value,
        email: document.getElementById('email').value.trim() === '' ? null : document.getElementById('email').value,
        company: document.getElementById('company').value.trim() === '' ? null : document.getElementById('company').value
    };
  
  
    // Define the URL of your API endpoint
    const apiUrl = 'https://surbhitbackend-production.up.railway.app/company';
  
    // Make an HTTP POST request using fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then(data => {
        console.log('Response:', data);
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
  });
  