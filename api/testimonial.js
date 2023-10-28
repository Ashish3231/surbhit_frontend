 // Function to fetch testimonials from the API
 async function fetchTestimonials() {
    try {
      const response = await fetch('https://surbhitbackend-production.up.railway.app/testimonial'); // Adjust the API URL as needed
      const data = await response.json();

      if (data.success) {
        const testimonialsData = data.testimonials;

        // Get the testimonials container
        const testimonialContainer = document.getElementById('testimonial-carousel');

        // Loop through the testimonials data and create HTML elements
        testimonialsData.forEach((testimonial) => {
          const testimonialItem = document.createElement('div');
          testimonialItem.classList.add('item');
          
          const quoteIcon = document.createElement('i');
            quoteIcon.classList.add('fa', 'fa-quote-left');

            const quoteText = document.createElement('p');
            quoteText.textContent = testimonial.message;

            const name = document.createElement('h4');
            name.textContent = testimonial.name;

            const title = document.createElement('span');
            title.textContent = testimonial.desg;

            // Append the sub-elements to the testimonial item
            testimonialItem.appendChild(quoteIcon);
            testimonialItem.appendChild(quoteText);
            testimonialItem.appendChild(name);
            testimonialItem.appendChild(title);

            // Append the testimonial item to the container
            testimonialContainer.appendChild(testimonialItem);
        });
      } else {
        console.error(data.message); // Handle error
      }
    } catch (error) {
      console.error(error); // Handle error
    }
  }

  // Call the fetchTestimonials function to load testimonials when the page loads
  window.addEventListener('load', fetchTestimonials);