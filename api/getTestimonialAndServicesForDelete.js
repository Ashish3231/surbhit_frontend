 // Function to fetch testimonials from the API
// const local = 'http://127.0.0.1:8080'
// const prod = 'https://surbhitbackend-production.up.railway.app'
 async function fetchTestimonials() {
  try {
    const response = await fetch(local + '/testimonial'); // Adjust the API URL as needed
    const data = await response.json();

    if (data.success) {
      const testimonialsData = data.testimonials;

      // Get the testimonials container
      const testimonialContainer = document.getElementById('testimonial-carousel');

      // Loop through the testimonials data and create HTML elements
      testimonialsData.forEach((testimonial) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('item');
        testimonialItem.id = `testimonial-${testimonial.id}`;
        
        const quoteIcon = document.createElement('i');
          quoteIcon.classList.add('fa', 'fa-quote-left');

          const deleteIcon = document.createElement('i');
          deleteIcon.classList.add('fa', 'fa-trash', 'delete',`testimonial-${testimonial.id}`);
          // deleteIcon.setAttribute('data-testimonial-id', testimonial.id);
          deleteIcon.addEventListener('click', () => {
              console.log("............",testimonial.id)
              deleteTestimonial(parseInt(testimonial.id));
          });

          const quoteText = document.createElement('p');
          quoteText.textContent = testimonial.message;

          const name = document.createElement('h4');
          name.textContent = testimonial.name;

          const title = document.createElement('span');
          title.textContent = testimonial.desg;

          // Append the sub-elements to the testimonial item
          testimonialItem.appendChild(quoteIcon);
          testimonialItem.appendChild(deleteIcon);
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

async function fetchServices() {
  try {
    const response = await fetch(local + '/service'); // Adjust the API URL as needed
    const data = await response.json();

    if (data.success) {
      const servicesContainer = document.getElementById('services-container');
      const services = data.services
      for (let i = 0; i < services.length; i++) {
        const service = services[i];
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('item');
        serviceItem.id = `service-${service.id}`;
        serviceItem.classList.add('col-lg-6');   
        const serviceContent = document.createElement('div');
        serviceContent.classList.add('service-item');
        const base64String = service.logo;
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash', 'delete',`service-${service.id}`);
        // deleteIcon.setAttribute('data-testimonial-id', testimonial.id);
        deleteIcon.addEventListener('click', () => {
            console.log("............",service.id)
            deleteService(parseInt(service.id));
        });
        serviceContent.innerHTML = `
          <img src = 'data:image/jpeg;base64, ${base64String}' >
          <h4>${service.title}</h4>
          <p>${service.content}</p>
        `;
        serviceContent.appendChild(deleteIcon);
        serviceItem.appendChild(serviceContent);
        servicesContainer.appendChild(serviceItem);
      }
    } else {
      console.error(data.message); // Handle error
    }
  } catch (error) {
    console.error(error); // Handle error
  }
}

// Call the fetchTestimonials function to load testimonials when the page loads
window.addEventListener('load', fetchServices);
window.addEventListener('load', fetchTestimonials);

