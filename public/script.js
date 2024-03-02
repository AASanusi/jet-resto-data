console.log('client-side js working');

async function getRestaurantData() {
    try {
        const response = await fetch("/restaurantdata");

        if (response.ok) {
            // Parse the response body as JSON
            const data = await response.json();
            console.log("Restaurant data:", data);

            // Display only the first 10 restaurants
            const first10Restaurants = data.slice(0, 10);

            // Construct HTML for the first 10 restaurants
            let html = "";
            first10Restaurants.forEach(restaurant => {
                html += `<div><strong>${restaurant.name}</strong></div>`;
                html += `<div>Cuisines: ${restaurant.cuisines}</div>`;
                html += `<div>Ratings: ${restaurant.rating.starRating}</div>`;
                html += `<div>Address: ${restaurant.address}</div>`;
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
