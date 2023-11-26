
document.getElementById('calculate').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(e.target);

    // Create a JSON object from form data
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    // Convert the JSON object to a string
    const jsonData = JSON.stringify(jsonObject);

    // Make a fetch request
    fetch(prod +'/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server if needed
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
      });
  });
