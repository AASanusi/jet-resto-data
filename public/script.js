async function getRestaurantData() {
    // Get the error message element
    const errorMessage = document.getElementById('error-message');

    try {
        // Get the postcode value from the input field
        const postcode = document.getElementById("resto-data").value;

        // Check if the postcode is provided
        if (!postcode) {
            // Show the error message if the postcode is not provided
            errorMessage.textContent = 'Postcode is required';
            errorMessage.style.display = 'block';
            return; // Exit the function if postcode is not provided
        } else {
            // Hide the error message if the postcode is filled
            errorMessage.style.display = 'none';
            // Proceed with fetching restaurant data
        }

        const response = await fetch(`/restaurantdata?postcode=${postcode}`);

        if (response.ok) {
            // Parse the response body as JSON
            const data = await response.json();
            console.log("Restaurant data:", data);

            if (data.length === 0) {
                // Handle case when no restaurants are found for the provided postcode
                errorMessage.textContent = 'No restaurants found for the provided postcode';
                errorMessage.style.display = 'block';
            } else {
                data.sort((a, b) => b.rating.starRating - a.rating.starRating);

                // Construct HTML for the first 10 restaurants
                let html = "";
                data.forEach(restaurant => {
                    html += `<div><strong>Name:</strong>${restaurant.name}</div>`;
                    html += `<div><strong>Cuisines:</strong>`;
                    restaurant.cuisines.forEach(cuisine => {
                        html += ` ${cuisine.name} (${cuisine.uniqueName}),`;
                    });
                    html = html.slice(0, -1); // Remove the last comma
                    html += `</div>`;
                    html += `<div><strong>Ratings:</strong> ${restaurant.rating.starRating}</div>`;
                    html += `<div><strong>Address:</strong> ${restaurant.address.city}, ${restaurant.address.firstLine}, ${restaurant.address.postalCode}, ${restaurant.address.location.type}, [${restaurant.address.location.coordinates.join(', ')}]</div>`;
                    html += `<hr>`;
                });

                // Set the HTML content of the #restaurant-list element
                document.querySelector('#restaurant-list').innerHTML = html;
            }
        } else {
            // Handle other error cases when response status is not ok
            errorMessage.textContent = `Failed to fetch data. Status not ok!`;
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        // Handle other errors, such as network errors
        console.error("Error fetching data:", error.message);
        // Set the error message text
        errorMessage.textContent = `Error fetching data: ${error.message}`;
        // Show the error message
        errorMessage.style.display = 'block';
    }
}
