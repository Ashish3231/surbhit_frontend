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
    fetch('http://127.0.0.1:8080/testimonial', {
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