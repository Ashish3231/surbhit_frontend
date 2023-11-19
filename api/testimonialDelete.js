// const local = 'http://127.0.0.1:8080'
// const prod = 'https://surbhitbackend-production.up.railway.app'  
// Function to delete a testimonial by ID
async function deleteTestimonial(id) {
    try {
        const response = await fetch(local + `/testimonial/${id}`, {
            method: 'DELETE',
        });

        if (response.status === 200) {
            console.log('Testimonial deleted successfully');
            // Remove the deleted testimonial from the UI
            const listItem = document.getElementById(`testimonial-${id}`);
            listItem.remove();
        } else if (response.status === 404) {
            console.log('Testimonial not found or already deleted');
            // Handle not found error
        } else {
            console.log('Error deleting testimonial');
            // Handle other errors
        }
    } catch (error) {
        console.error('An error occurred:', error);
        // Handle network or other errors
    }
}