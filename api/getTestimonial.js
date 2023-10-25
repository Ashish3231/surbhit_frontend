function fetchTestimonials() {
  fetch('https://your-api-endpoint.com/testimonials', {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => {
      // Populate testimonials using the fetched data
      const testimonialsContainer = document.querySelector('.owl-testimonials')
      data.forEach((testimonial) => {
        const testimonialItem = document.createElement('div')
        testimonialItem.classList.add('item')

        testimonialItem.innerHTML = `
                <i class="fa fa-quote-left"></i>
                <p>"${testimonial.text}"</p>
                <h4>${testimonial.name}</h4>
                <span>${testimonial.position}</span>
            `

        testimonialsContainer.appendChild(testimonialItem)
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

// Call the fetchTestimonials function to populate testimonials
fetchTestimonials()
