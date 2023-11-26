const form = document.getElementById('testimonialForm');
const responseMessage = document.getElementById('responseMessageForTestimonialCreate');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("somethinmg happen")
    const name = document.getElementById("name").value;
    const desg = document.getElementById("designation").value;
    const message = document.getElementById("message").value;

    // Data to send in the request
    const data = {
      name: name,
      desg: desg,
      message: message
    };
    fetch(local + '/testimonial', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseMessage.innerHTML = 'Testimonial submitted successfully!';
        } else {
            responseMessage.innerHTML = 'Error: Testimonial submission failed.';
        }
    })
    .catch(error => {
        responseMessage.innerHTML = 'Error: Testimonial submission failed.';
    });
});


/**********************
 * 
 * -----add services
 * 
 */


document.getElementById('addService').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

// const formData = new FormData(this); // Create FormData object with form data
// const file = document.getElementById('service-icon')
const fileInput = document.getElementById('service-icon');
const file = fileInput.files[0];
const service = JSON.stringify({
    title: document.getElementById('service-title').value.trim() === '' ? null : document.getElementById('service-title').value,
    content: document.getElementById('service-content').value.trim() === '' ? null : document.getElementById('service-content').value,
})

// Create a FormData object
const formData = new FormData();

// Append the logo buffer to the form data
formData.append('file', file); // Append the file to the form data
formData.append('service', service);
// Assuming your API endpoint is 'YOUR_API_ENDPOINT'
const apiEndpoint = local + '/service';
console.log("formData: ",formData)
fetch(apiEndpoint, {
    method: 'POST',
    body: formData
})
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Service created successfully:', data);
    // You can add further actions upon successful creation of the service
})
.catch(error => {
    console.error('There was an error creating the service:', error);
    // Handle errors here
});
});
 

