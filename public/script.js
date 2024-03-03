async function getRestaurantData() {
    try {

        const restoData = document.getElementById("resto-data").value;
        const response = await fetch(`/restaurantdata?postcode=${restoData}`);

        if (response.ok) {
            // Parse the response body as JSON
            const data = await response.json();
            console.log("Restaurant data:", data);

            // Display only the first 10 restaurants
            const first10Restaurants = data.slice(0, 10);

            // Construct HTML for the first 10 restaurants
            let html = "";
            first10Restaurants.forEach(restaurant => {
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

        } else {
            // Handle error when response status is not ok
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

    } catch (error) {
        // Handle other errors, such as network errors
        console.error("Error fetching data:", error.message);
    }
}

getRestaurantData();
